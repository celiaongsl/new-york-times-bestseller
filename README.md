# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## To Deploy To Firebase

In order to deploy your webapp to firebase, you can do 2 methods:

### `yarn build && firebase deploy`

This will deploy both your hosting and functions. Usually you'll only need to run this when you initialize the project.

### `yarn build && firebase deploy --only hosting`

This will only deploy your hosting. Use this if you made changes to your webapp view.

## Actions on Google Commands

Make sure you're inside your `sdk` folder first before you run any of these commands.

### `gactions push`

Whenever you make changes inside the `sdk` folder, make sure to push it  to your Actions on Google to sync it. 

### `gactions pull --project-id ${your project id}`

Do this if you need to initialise your project folder with what you have on your Actions on Google console.

### `gactions pull --force`

Do this if you need to update your local files with the changes you made on Actions on Google.

### `gactions pull --force --clean`

Add a `clean` tag if you require removal of files.