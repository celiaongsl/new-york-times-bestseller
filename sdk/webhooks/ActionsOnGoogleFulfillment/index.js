const { conversation, Canvas } = require("@assistant/conversation");
const functions = require("firebase-functions");

const app = conversation();

const NEW_GREETING = `Welcome to the New York Times Bestseller List!`;
const RETURNING_GREETINGS = [
  `Hey, you're back to the New York Times Bestseller List!`,
  `Welcome back to the New York Times Bestseller List!`,
  `Hey there, you made it to the New York Times Bestseller List!`,
];

const FICTION_LIST = [
  {
    position: 1,
    weeksOnList: "6 weeks on the list",
    title: "The Four Winds",
    author: "Kristin Hannah",
    shortSummary:
      "As dust storms roll during the Great Depression, Elsa must choose between saving the family and farm or heading West.",
    longSummary: "", // will put a long summary here
    bookCoverURL: "", // will put a URL here
  },
  {
    position: 2,
    weeksOnList: "2 weeks on the list",
    title: "Life After Death",
    author: "Sister Souljah",
    shortSummary:
      "In a sequel to “The Coldest Winter Ever,” Winter Santiaga emerges after time served and seeks revenge.",
    longSummary: "", // will put a long summary here
    bookCoverURL: "", // will put a URL here
  },
  {
    position: 3,
    weeksOnList: "2 weeks on the list",
    title: "Later",
    author: "Stephen King",
    shortSummary:
      "An N.Y.P.D. detective asks the son of a struggling single mother to use his unnatural ability to track a killer.",
    longSummary: "", // will put a long summary here
    bookCoverURL: "", // will put a URL here
  },
  {
    position: 4,
    weeksOnList: "New this week",
    title: "Fast Ice",
    author: "Clive Cussler and Graham Brown",
    shortSummary:
      "The 18th book in the NUMA Files series. Kurt Austin and Joe Zavala uncover a decades-old conspiracy when they search for a missing former colleague in Antarctica.",
    longSummary: "", // will put a long summary here
    bookCoverURL: "", // will put a URL here
  },
  {
    position: 5,
    weeksOnList: "New this week",
    title: "The Rose Code",
    author: "Kate Quinn",
    shortSummary:
      "As a post-World War II royal wedding approaches, an encrypted letter resurrects an alliance between three female code breakers.",
    longSummary: "", // will put a long summary here
    bookCoverURL: "", // will put a URL here
  },
];

const NON_FICTION_LIST = [
  {
    position: 1,
    weeksOnList: "New this week",
    title: "This is the fire",
    author: "Don Lemon",
    shortSummary:
      "The CNN host looks at the impact of racism on his life and prescribes ways to address systemic flaws in America.",
    longSummary: "", // will put a long summary here
    bookCoverURL: "", // will put a URL here
  },
  {
    position: 2,
    weeksOnList: "2 weeks on the list",
    title: "The Code Breaker",
    author: "Walter Isaacson",
    shortSummary:
      "How the Nobel Prize winner Jennifer Doudna and her colleagues invented CRISPR, a tool that can edit DNA.",
    longSummary: "", // will put a long summary here
    bookCoverURL: "", // will put a URL here
  },
  {
    position: 3,
    weeksOnList: "22 weeks on the list",
    title: "Greenlights",
    author: "Matthew McConaughey",
    shortSummary:
      "The Academy Award-winning actor shares snippets from the diaries he kept over the last 35 years.",
    longSummary: "", // will put a long summary here
    bookCoverURL: "", // will put a URL here
  },
  {
    position: 4,
    weeksOnList: "33 weeks on the list",
    title: "Caste",
    author: "Isabel Wilkerson",
    shortSummary:
      "The Pulitzer Prize-winning journalist examines aspects of caste systems across civilizations and reveals a rigid hierarchy in America today.",
    longSummary: "", // will put a long summary here
    bookCoverURL: "", // will put a URL here
  },
  {
    position: 5,
    weeksOnList: "5 weeks on the list",
    title: "How to avoid a climate disaster",
    author: "Bill Gates",
    shortSummary:
      "A prescription for what business, governments and individuals can do to work toward zero emissions.",
    longSummary: "", // will put a long summary here
    bookCoverURL: "", // will put a URL here
  },
];

/**
 * Pick a random item from an array. This is to make
 * responses more conversational.
 *
 * @param  {array} array representing a list of elements.
 * @return  {string} item from an array.
 */
const randomArrayItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

app.handle("welcome", (conv) => {
  if (!conv.device.capabilities.includes("INTERACTIVE_CANVAS")) {
    conv.add("Sorry, this device does not support Interactive Canvas!");
    conv.scene.next.name = "actions.page.END_CONVERSATION";
    return;
  }
  if (conv.user.lastSeenTime === undefined) {
    conv.add(`<speak>${NEW_GREETING}</speak>`);
  } else {
    conv.add(`<speak>${randomArrayItem(RETURNING_GREETINGS)}</speak>`);
  }
  conv.add(
    new Canvas({
      data: {
        scene: "WELCOME",
      },
    })
  );
  conv.add("Would you like to see the fiction or non-fiction list today?");
});

app.handle("book_details", (conv) => {
  conv.add("<speak>Here's the book details you wanted</speak>");
  conv.add(
    new Canvas({
      data: {
        scene: "BOOK_DETAILS",
      },
    })
  );
});

app.handle("category_bestsellers", (conv) => {
  let bookData = [];

  if (conv.session.params.book_categories_options === "fiction") {
    bookData = FICTION_LIST;
  } else {
    bookData = NON_FICTION_LIST;
  }

  conv.add("<speak>Here's the bestsellers for this category</speak>");
  conv.add(
    new Canvas({
      data: {
        scene: "CATEGORY_BESTSELLERS",
        params: bookData
      },
    })
  );
});

exports.ActionsOnGoogleFulfillment = functions.https.onRequest(app);
