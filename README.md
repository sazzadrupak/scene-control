# scene-control

## Project Overview

A simple frontend application to fetch data using [Mount Kalvin API](https://mountkelvin.github.io/api/) from server and show the data

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
  - Type script [Extends JavaScript by adding types.](https://www.typescriptlang.org/)
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

## Project description
  When the application starts, application fetch the site information (e.g. name, scenes). The `name` value is shown in the header and the title of the page. Right now, Mount Kelvin API returns list of 5 scenes item  which are `Evening, Night, Testi, Daylighs, Evening Lights`. Along with these 5 scene states, I have added two more scene control state in the scene list: at the beginning `All On` and at the end `All Off`. Now, when you click any of the scene, using the websocket, an API will be called to trigger a control command of that scene. The application has been made responsive using bootstap 4. In a bigger screen, the scene control switches will be shown side by side - left to right. But, in the smaller screen, the switches will be shown according to the screen size - left to right and top to bottom. The switch icon will be changed on per click, which gives the feel that the switch has been clicked and a control request has been made after the click.

## Issues
  In the API documentation of [Mount Kalvin](https://mountkelvin.github.io/api/), I could not get the ideal idea what will happen after `apply/scene` call using socket emit. So, to make a visually understandable, I made the scene item as a switch; you can click the scene control switch, after the click you will see the icon of that specific scene control switch will be changed. This gives you the idea that you have clicked a scene control switch and something happened behind the scene in the server.