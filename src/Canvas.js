import React from "react";
import WelcomePage from "./pages/WelcomePage";
import CategoryBestsellersPage from "./pages/CategoryBestsellersPage";
import BookDetailsPage from "./pages/BookDetailsPage";
import BackgroundContainer from "./components/BackgroundContainer";

import { sceneTypeConstant } from "./helper/constant";

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.interactiveCanvas = window.interactiveCanvas;
    this.scenes = {
      WELCOME: (params) => {
        this.welcomeScene();
      },
      CATEGORY_BESTSELLERS: (params) => {
        this.categoryBestsellersScene(params);
      },
      BOOK_DETAILS: (params) => {
        this.bookDetailsScene(params);
      },
    };
    this.state = {
      marginTop: "0px",
      sceneType: sceneTypeConstant.WELCOME,
      params: null,
    };
  }

  componentDidMount() {
    this.interactiveCanvas.getHeaderHeightPx().then((height) => {
      this.setState({ marginTop: `${height}px` });
      this.setCallbacks();
    });
  }

  setCallbacks = () => {
    // Declare the Interactive Canvas action callbacks.
    const callbacks = {
      onUpdate: (data) => {
        try {
          const dataEntry = data[0];
          const scene = dataEntry.scene
            ? dataEntry.scene
            : dataEntry.google
            ? dataEntry.google.intent.name
            : null;
          const params = dataEntry.params ? dataEntry.params : null;
          this.scenes[scene.toUpperCase()](params);
        } catch (e) {
          // do nothing, when no command is sent or found
        }
      },
    };
    // Called by the Interactive Canvas web app once web app has loaded to
    // register callbacks.
    this.interactiveCanvas.ready(callbacks);
  };

  welcomeScene = () => {
    this.setState({ sceneType: sceneTypeConstant.WELCOME });
  };

  categoryBestsellersScene = (params) => {
    this.setState({
      sceneType: sceneTypeConstant.CATEGORY_BESTSELLERS,
      params,
    });
  };

  bookDetailsScene = (params) => {
    this.setState({
      sceneType: sceneTypeConstant.BOOK_DETAILS,
      params,
    });
  };

  renderErrorScene = () => {
    return (
      <BackgroundContainer marginTop={this.state.marginTop}>
        <h1>This page is unavailable, please try again.</h1>
      </BackgroundContainer>
    );
  };

  render() {
    const { sceneType } = this.state;
    if (sceneType === sceneTypeConstant.WELCOME)
      return (
        <BackgroundContainer marginTop={this.state.marginTop}>
          <WelcomePage interactiveCanvas={this.interactiveCanvas} />
        </BackgroundContainer>
      );
    if (sceneType === sceneTypeConstant.CATEGORY_BESTSELLERS)
      return (
        <BackgroundContainer marginTop={this.state.marginTop}>
          <CategoryBestsellersPage
            params={this.state.params}
            interactiveCanvas={this.interactiveCanvas}
          />
        </BackgroundContainer>
      );
    if (sceneType === sceneTypeConstant.BOOK_DETAILS)
      return (
        <BackgroundContainer marginTop={this.state.marginTop}>
          <BookDetailsPage
            params={this.state.params}
            interactiveCanvas={this.interactiveCanvas}
          />
        </BackgroundContainer>
      );
    return this.renderErrorScene();
  }
}

export default Canvas;
