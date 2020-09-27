# VueJS Admin Dashboard Template

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

The purpose of this repo is to work in a study based project using the [Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template](https://www.uplabs.com/posts/vuesax-admin-dashboard-template-ecommerce-grid-page) which can be found in [UpLabs](https://www.uplabs.com/). There are not intentions to use it to sell, distribute or copy the original sourcecode, it's a just for fun project. The license used is the [Free Personal License](https://www.uplabs.com/premium/license).

## Main technologies/services intended to be used
* [Commitizen](https://github.com/commitizen): To be intentional with each commit done in the project
* [Storybook](https://storybook.js.org/): As they say, to build bulletproof UI components. It works with each FE library that is going to be used in the project
* [Vue.js](https://vuejs.org/)
* [Vuex](https://vuex.vuejs.org/)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Svelte](https://svelte.dev/)

## Requirements
Latest LTS version of [Node.js](https://nodejs.org/en/).

## Setup
This project uses [git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules) for the webpack bundler, in order to setup the submodule you need to run the following commands

```sh
git submodule update --init --recursive
```
Run the following script in order to install all the modules used in this project

```sh
npm i
```

## Run the application

Run the following script in order to run the application
```sh
npm start
```

Once the application is running you can see the changes in `http://localhost:8080`.

**NOTE:** The application gets refreshed with every single change made in the code.

### Storybook

Run the following script in order to run the story book tool in development mode

```sh
npm run storybook
```

## Folder structure

```
--| build
--| dist
--| src
----| assets
------| fonts
------| images
------| styles
--------| layouts
--------| pages
--------| components
----| layouts
----| pages
----| components
----| store
----| browser
----| server
--| stories
--| tests
```

### build

This folder contains the webpack config files that helps to bundle the application in the different environment. This config files are not used to override any [story book webpack integration](https://storybook.js.org/docs/react/configure/webpack)

### dist

The bundle output will be stored here. _Note_ that this folder is ignored in the [.gitignore](.gitignore) file

### src

The project source files

### stories

This folder contains all the [story book](https://storybook.js.org/) stories. The config is found in the [.storybook](.storybook/main.js) folder
