# scene-control

## Project Overview

A simple frontend application to fetch data using Mount Kalvin API from server and show the data

Types of data fetched from server:
  - Site name
  - Scenes type

## Todo list
  - [x] Use websocket to call the API
  - [x] Fetch header data
  - [x] Fetch scenes data
  - [x] Show header data in html
  - [x] Show scenes items in html
  - [x] Click any of scene and call the api which control a scene

## Tools and Libraries
  - React [A JavaScript library for building user interfaces](https://reactjs.org/)
  - Redux [A Predictable State Container for JS Apps](https://redux.js.org/)
  - Redux thunk [A middleware that call action creators in redux](https://github.com/reduxjs/redux-thunk)
  - Yarn [FAST, RELIABLE, AND SECURE DEPENDENCY MANAGEMENT](https://classic.yarnpkg.com/en/)
  - Docker [Tools to containerize, build and ship application](https://www.docker.com/)
  - Bootstrap 4 [Framework for building a responsive site](https://getbootstrap.com/)
  - Font awesome icon [Free icons list](https://fontawesome.com/)


## How to run project with docker
  - Clone this repo
  - Go to the projects' root folder where `docker-compose.yaml` file presents in terminal
  - Run this command `docker-compose up --build` and wait until the application build and run successfully. After the success build, the application will run in 3000 port of your system.
  - Go to this url `localhost:3000` from your browser. You can see the application with a header name and couple of cards which are scenes item.

## How to run project locally
  - Check if the `3000` port is free and not used by other application in your system
  - Clone this repo
  - Go to the front-end directory from the project directory in terminal
  - Run this command to install the dependency `yarn install` or `npm install` based on which one you have installed in your system.
  - Run this command to run the application `yarn run start` or `npm run start`
  - You will be redirected to the application url `localhost:3000` automatically
  - (N.B. You might not see anything in the application page. The reason would be the repo is missing `.env` file which has the api key of Mount Kelvin server). My recommendation would be to use docker to run the application.

## Issues
  In the API documentation of [Mount Kalvin](https://mountkelvin.github.io/api/), I could not get the idea what will happen after `apply/scene` call using socket emit. So, to make a visually understandable, I made the scene item as a switch, you can click the scene swith, after the click you will see the icon of that specific scene switch will be changed and go to previous icon again. This gives you the idea that you have clicked a scene switch and something happened in the server.