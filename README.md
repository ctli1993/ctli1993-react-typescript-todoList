# Fun To-do List

## Project Introduction

This is a fun to-do app built with React, Redux, and TypeScript. Feel free to download and check it :)

In addition to the basic CRUD operations a normal to-do app provides, this fun to-do app have a "get inspiration" page. Thus, if you don't know what to do (or what to put on your to-do list), you can navigate to the "get inspiration" page. By simply clicking a button, the app would generate a random thing for you to do.

![demo gif](https://media.giphy.com/media/pTrHmy4rLle4eFMM4d/giphy.gif)



Additional tech/tools I use in this project include

- [wouter](https://www.npmjs.com/package/wouter) (for routing)
- [styled-components](https://styled-components.com/) (for styling)
- [axios](https://github.com/axios/axios) (for data fetching)
- [Redux Toolkit](https://redux-toolkit.js.org/) (for writing Redux logic)
- [Bored API](https://www.boredapi.com/) (for generating the random things to do)

## Installation

Feel free to fork or download the source code to play around. After you download it, you can do the following to start the project locally

```
yarn
yarn start
```

You can also do the following to have a production build

```
yarn build
```

## Tech Stacks Selection

Below are the reasons why I chose a specific tech/tool over its alternatives

#### Project setup

- I didn’t use Create React App mainly because I want to learn how to set up a new React project from the ground up. By doing it manually, I was able to learn how to configure webpack, Babel, ESLint, etc through building this project.

#### [Wouter](https://www.npmjs.com/package/wouter)

- While React-Router is the current mainstream routing tool for a React project, I chose Wouter for the fact that it could achieve the same functionality in a much lighter way. Wouter has zero dependency (almost ten times lighter than React Router). And its hook-based APIs work in a way very similar to React Router. As someone who has been using React Router for a while, I was able to switch to Wouter immediately.

#### [Redux Toolkit](https://redux-toolkit.js.org/)

- Redux Toolkit save developers from writing a lot of boilerplates. Plus, it uses the famous Immer library internally, which ensures developers write Redux in an immutable way. It tremendously speeds up the development.

#### [styled-components](https://styled-components.com/)

- styled-components is a very convenient tool to build reusable components with style. One can also easily set up a front-end design system with it. Another reason I chose it is that the component-driven concept goes really well with React's thinking.
