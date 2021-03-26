const { conversation, Canvas } = require("@assistant/conversation");
const functions = require("firebase-functions");

const app = conversation();

const NEW_GREETING = `Welcome to the New York Times Bestseller List!`;
const RETURNING_GREETINGS = [
  `Hey, you're back to the New York Times Bestseller List!`,
  `Welcome back to the New York Times Bestseller List!`,
  `Hey there, you made it to the New York Times Bestseller List!`,
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
  // Implement your code here
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
        // displayedWord: displayedWord,
      },
    })
  );
  conv.add("Would you like to see the fiction or non-fiction list today?");
});

app.handle("book_details", (conv) => {
  // Implement your code here
  conv.add("here's some book details");
  conv.add("<speak>Does this overwrite anything?</speak>");
  conv.add(
    new Canvas({
      data: {
        scene: "BOOK_DETAILS",
        // displayedWord: displayedWord,
      },
    })
  );
});

app.handle("category_bestsellers", (conv) => {
  conv.add("category bestsellers!! welcome");
  conv.add("<speak>Does this overwrite anything?</speak>");
  conv.add(
    new Canvas({
      data: {
        scene: "CATEGORY_BESTSELLERS",
      },
    })
  );
});

exports.ActionsOnGoogleFulfillment = functions.https.onRequest(app);
