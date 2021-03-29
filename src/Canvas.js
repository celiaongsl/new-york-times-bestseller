import React from "react";
import WelcomePage from "./pages/WelcomePage";
import CategoryBestsellersPage from "./pages/CategoryBestsellersPage";
import BookDetailsPage from "./pages/BookDetailsPage";
import BackgroundContainer from "./components/BackgroundContainer";

import { sceneTypeConstant } from "./helper/constant";
const FICTION_LIST = {
  position: 1,
  weeksOnList: "6 weeks on the list",
  title: "The Four Winds",
  author: "Kristin Hannah",
  shortSummary:
    "As dust storms roll during the Great Depression, Elsa must choose between saving the family and farm or heading West.",
  longSummary: `Texas, 1934. Millions are out of work and a drought has broken the Great Plains. Farmers are fighting to keep their land and their livelihoods as the crops are failing, the water is drying up, and dust threatens to bury them all. One of the darkest periods of the Great Depression, the Dust Bowl era, has arrived with a vengeance.

    In this uncertain and dangerous time, Elsa Martinelli—like so many of her neighbors—must make an agonizing choice: fight for the land she loves or go west, to California, in search of a better life. The Four Winds is an indelible portrait of America and the American Dream, as seen through the eyes of one indomitable woman whose courage and sacrifice will come to define a generation.
    
    From the #1 New York Times bestselling author of The Nightingale and The Great Alone comes an epic novel of love and heroism and hope, set against the backdrop of one of America’s most defining eras—the Great Depression.`,
  bookCoverURL: "https://i.ibb.co/kqbtCd7/the-four-winds.jpg",
};

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
      sceneType: sceneTypeConstant.BOOK_DETAILS,
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
            // params={this.state.params}
            params={{ bookData: FICTION_LIST, categoryOption: "Fiction" }}
            interactiveCanvas={this.interactiveCanvas}
          />
        </BackgroundContainer>
      );
    if (sceneType === sceneTypeConstant.BOOK_DETAILS)
      return (
        <BackgroundContainer marginTop={this.state.marginTop}>
          <BookDetailsPage
            // params={this.state.params}
            params={{
              chosenBookDetails: FICTION_LIST,
              categoryOption: "Fiction",
            }}
            interactiveCanvas={this.interactiveCanvas}
          />
        </BackgroundContainer>
      );
    return this.renderErrorScene();
  }
}

export default Canvas;
