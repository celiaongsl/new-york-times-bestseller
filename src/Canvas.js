import React from "react";
// import "./Canvas.css";
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
      sceneType: sceneTypeConstant.CATEGORY_BESTSELLERS,
      params: [],
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
    this.setState((state) => {
      return {
        sceneType: sceneTypeConstant.CATEGORY_BESTSELLERS,
      };
    });
  };

  bookDetailsScene = (params) => {
    this.setState((state) => {
      return {
        sceneType: sceneTypeConstant.BOOK_DETAILS,
      };
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
          <WelcomePage />
        </BackgroundContainer>
      );
    if (sceneType === sceneTypeConstant.CATEGORY_BESTSELLERS)
      return (
        <BackgroundContainer marginTop={this.state.marginTop}>
          <CategoryBestsellersPage />
        </BackgroundContainer>
      );
    if (sceneType === sceneTypeConstant.BOOK_DETAILS)
      return (
        <BackgroundContainer marginTop={this.state.marginTop}>
          <BookDetailsPage />
        </BackgroundContainer>
      );

    return this.renderErrorScene();
  }
}

export default Canvas;
