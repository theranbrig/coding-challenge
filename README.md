# Theran Brigowatz Coding Interview Challenge

## About

This is a simple message board app that was built primarily as a front-end project as a part of a coding challenge to build something with a 90 minute time limit (though it did take me a bit longer at 2 hours as I had to implement a new testing structure that I had not used before.)  This is a message board app built for sports messages and instantly updates as messages are added since it is built with a React.js front-end and uses Google Firebase's Realtime Database.

## Build Process

This was built first by using Create React App as the boilerplate since I knew that under the time constraints I needed to be up and running quickly.  It only has two routes that are built out with React Router.  It has a super simple Home page and the message board page.

Login is handled by Google Firebase and you can login with your Google credentials as I did not have time to build out a back-end user database. Messaging updates instantly on the React front-end.  Messages are also hosted in Google Firebase both for speed and to facilitate the quick build time. (Though I do have experience building a full back-end that can be seen [here](https://github.com/theranbrig/wiki-what))

In this project, basic styling was done with Bootstrap as I did not have time to fit completely build out the CSS from scratch.  This app is not up to my usual detailed styling standards, as you can see in my other projects.  To see more of my normal styling please see my [Wiki-What](https://github.com/theranbrig/wiki-what) and [Jams](https://github.com/theranbrig/bloc-jams) projects.

Finally all tests are built using the React Testing Library and check for renders of the components

## Tech

* React.js
* Firebase
* react-testing-library

## Improvements

Here are some ways that I would make it better given more time to fine tune thngs.
* Add your own message board topic, rather than just the five that are built in
* More interesting home page, logo, and general styling
* Edit and delete message buttons for users
* Reply to comments, rather than to just the message board as a whole

## Install

Download and install dependencies.

```sh
git clone git@github.com:theranbrig/coding-challenge # or clone your own fork
cd coding-challenge
npm install
npm start
```

## Author

Theran Brigowatz is a Full-stack Web Developer currently out of Seoul, South Korea, but transitioning back to the US.  Check him out at the following:

* [theran.co](https://www.theran.co)
* theran.brigowatz@gmail.com
* [twitter.com/wellBuilt](https://www.twitter.com/wellBuilt)
* [github.com/theranbrig](https://www.github.com/theranbrig)

> Made with :heart: and :coffee:.
