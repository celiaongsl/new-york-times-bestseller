<p align="center">
  <img src="/../version3/readme_assets/github_nytlogo.png?raw=true" />
</p>

# New York Times Bestseller Bot

This project combines Google's Interactive Canvas with ReactJS to create a bot that will tell you what are the bestsellers on the New York Times' list.

## Motivation

Simply because at the time of writing this, there's 0 tutorials on how to connect ReactJS to Interactive Canvas! And so I decided to create something simple enough for anyone to get started with it.

## Note

This project will receive minimal maintenance. There'll be no feature requests and will unlikely to acknowledge pull requests unless it's to fix security  issues.

## Blog

If you'd like a full walk-through of this bot, here's the tutorial to follow:

1. Part 1: https://celiaongsl.medium.com/building-a-google-assistant-with-interactive-canvas-and-reactjs-part-1-5e290eccfdbd
2. Part 2: https://celiaongsl.medium.com/building-a-google-assistant-with-interactive-canvas-and-reactjs-part-2-3aa88584d4cd
3. Part 3: https://celiaongsl.medium.com/building-a-google-assistant-with-interactive-canvas-and-reactjs-part-3-5eaa14f48b6c

## Screenshots

The Welcome Page:
<p align="center">
  <img src="/../version3/readme_assets/welcomepage.png?raw=true" />
</p>

The List of Books Page:
<p align="center">
  <img src="/../version3/readme_assets/categorylistpage.png?raw=true" />
</p>

The Book Details Page:
<p align="center">
  <img src="/../version3/readme_assets/bookdetailspage.png?raw=true" />
</p>

## Installation

### `yarn start`

This starts the front-end application and opens up into http://localhost:3000.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## To Deploy To Firebase

In order to deploy your webapp to firebase, you can do 2 methods:

### `yarn build && firebase deploy`

This will deploy both your hosting and functions. Usually you'll only need to run this when you initialize the project.

### `yarn build && firebase deploy --only hosting`

This will only deploy your hosting. Use this if you made changes to your webapp view.

## Actions on Google Commands

Make sure you're inside your `sdk` folder first before you run any of these commands.

### `gactions push`

Whenever you make changes inside the `sdk` folder, make sure to push it to your Actions on Google to sync it.

### `gactions pull --project-id ${your project id}`

Do this if you need to initialise your project folder with what you have on your Actions on Google console.

### `gactions pull --force`

Do this if you need to update your local files with the changes you made on Actions on Google.

### `gactions pull --force --clean`

Add a `clean` tag if you require removal of files.
