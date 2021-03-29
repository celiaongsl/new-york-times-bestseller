import React from "react";
import WelcomePage from "./pages/WelcomePage";
import CategoryBestsellersPage from "./pages/CategoryBestsellersPage";
import BookDetailsPage from "./pages/BookDetailsPage";
import BackgroundContainer from "./components/BackgroundContainer";

import { sceneTypeConstant } from "./helper/constant";
const FICTION_LIST = [
  {
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
  },
  {
    position: 2,
    weeksOnList: "2 weeks on the list",
    title: "Life After Death",
    author: "Sister Souljah",
    shortSummary:
      "In a sequel to “The Coldest Winter Ever,” Winter Santiaga emerges after time served and seeks revenge.",
    longSummary: `Instant #1 New York Times Bestseller
    Instant USA TODAY Bestseller
    
    The long-anticipated sequel to Sister Souljah’s million copy New York Times bestseller The Coldest Winter Ever.
    
    Winter Santiaga hit time served. Still stunning, still pretty, still bold, still loves her father more than any man in the world, still got her hustle and high fashion flow. She’s eager to pay back her enemies, rebuild her father’s empire, reset his crown, and ultimately to snatch Midnight back into her life no matter which bitch had him while she was locked up. But Winter is not the only one with revenge on her mind. Simone, Winter’s young business partner and friend, is locked and loaded and Winter is her target. Will she blow Winter’s head off? Can Winter dodge the bullets? Or will at least one bullet blast Winter into another world? Either way Winter is fearless. Hell is the same as any hood and certainly the Brooklyn hood she grew up in. That’s what Winter thinks.
    
    A heartwarming, heart-burning, passionate, sexual, comical, and completely original adventure is about to happen in real time—raw, shocking, soulful, and shameless. True fans won’t let Winter travel alone on this amazing journey.`,
    bookCoverURL:
      "https://i.ibb.co/M2Jwwt1/life-after-death-9781982139131-hr.jpg",
  },
  {
    position: 3,
    weeksOnList: "2 weeks on the list",
    title: "Later",
    author: "Stephen King",
    shortSummary:
      "An N.Y.P.D. detective asks the son of a struggling single mother to use his unnatural ability to track a killer.",
    longSummary: `#1 bestselling author Stephen King returns with a brand-new novel about the secrets we keep buried and the cost of unearthing them.

    The son of a struggling single mother, Jamie Conklin just wants an ordinary childhood. But Jamie is no ordinary child. Born with an unnatural ability his mom urges him to keep secret, Jamie can see what no one else can see and learn what no one else can learn. But the cost of using this ability is higher than Jamie can imagine - as he discovers when an NYPD detective draws him into the pursuit of a killer who has threatened to strike from beyond the grave.
    
    Later is Stephen King at his finest, a terrifying and touching story of innocence lost and the trials that test our sense of right and wrong. With echoes of King's classic novel IT, Later is a powerful, haunting, unforgettable exploration of what it takes to stand up to evil in all the faces it wears.`,
    bookCoverURL: "https://i.ibb.co/RvKs7Tv/81-Lo-D65-Jy6-L.jpg",
  },
  {
    position: 4,
    weeksOnList: "New this week",
    title: "Fast Ice",
    author: "Clive Cussler and Graham Brown",
    shortSummary:
      "The 18th book in the NUMA Files series. Kurt Austin and Joe Zavala uncover a decades-old conspiracy when they search for a missing former colleague in Antarctica.",
    longSummary: `Kurt Austin races to Antarctica to stop a chilling plot that imperils the entire planet in the latest novel from the #1 New York Times-bestselling Grand Master of Adventure.

    After a former NUMA colleague disappears while researching the icebergs of Antarctica, Kurt Austin and his assistant Joe Zavala embark for the freezing edge of the world to investigate. Even as they confront perilous waters and frigid temperatures, they are also are up against a terrifying man-made weapon--a fast-growing ice that could usher in a new Ice Age.
    
    Pitted against a determined madman and a monstrous storm, Kurt and the NUMA team must unravel a Nazi-era plot in order to save the globe from a freeze that would bury it once and for all`,
    bookCoverURL: "https://i.ibb.co/HDBCDcf/9780593395615.jpg",
  },
  {
    position: 5,
    weeksOnList: "New this week",
    title: "The Rose Code",
    author: "Kate Quinn",
    shortSummary:
      "As a post-World War II royal wedding approaches, an encrypted letter resurrects an alliance between three female code breakers.",
    longSummary: `The New York Times and USA Today bestselling author of The Huntress and The Alice Network returns with another heart-stopping World War II story of three female code breakers at Bletchley Park and the spy they must root out after the war is over.

    1940. As England prepares to fight the Nazis, three very different women answer the call to mysterious country estate Bletchley Park, where the best minds in Britain train to break German military codes. 
    
    Vivacious debutante Osla is the girl who has everything—beauty, wealth, and the dashing Prince Philip of Greece sending her roses—but she burns to prove herself as more than a society girl, and puts her fluent German to use as a translator of decoded enemy secrets. Imperious self-made Mab, product of east-end London poverty, works the legendary codebreaking machines as she conceals old wounds and looks for a socially advantageous husband. Both Osla and Mab are quick to see the potential in local village spinster Beth, whose shyness conceals a brilliant facility with puzzles, and soon Beth spreads her wings as one of the Park’s few female cryptanalysts. 
    
    But war, loss, and the impossible pressure of secrecy will tear the three apart. 1947. As the royal wedding of Princess Elizabeth and Prince Philip whips post-war Britain into a fever, three friends-turned-enemies are reunited by a mysterious encrypted letter--the key to which lies buried in the long-ago betrayal that destroyed their friendship and left one of them confined to an asylum. A mysterious traitor has emerged from the shadows of their Bletchley Park past, and now Osla, Mab, and Beth must resurrect their old alliance and crack one last code together. But each petal they remove from the rose code brings danger--and their true enemy--closer...`,
    bookCoverURL: "https://i.ibb.co/3NBhLqm/53914938.jpg",
  },
];

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
            params={this.state.params}
            interactiveCanvas={this.interactiveCanvas}
          />
        </BackgroundContainer>
      );
    return this.renderErrorScene();
  }
}

export default Canvas;
