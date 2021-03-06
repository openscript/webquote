# webquote
A little wizard to create quotes for web sites, which was developed as a demonstration and an evaluation of the following 
technologies:
 - [x] [Typescript](https://github.com/Microsoft/TypeScript), [React](https://github.com/facebook/react) and [Redux](https://github.com/reactjs/redux)
   - [React Router](https://github.com/ReactTraining/react-router)
   - [Redux Thunk](https://github.com/gaearon/redux-thunk) <br> Middleware to return functions from actions, which is used for asynchronous actions.
   - [Redux Persist](https://github.com/rt2zz/redux-persist) <br> Redux store, which is used to persist a certain part of the state to the local storage.
 - [x] [Material UI](https://github.com/mui-org/material-ui) and [Styled Components](https://github.com/styled-components/styled-components)
 - [x] [Firebase](https://github.com/firebase/firebase-js-sdk)
 - [x] [Travis CI](https://travis-ci.org/) with deployment to [GitHub Pages](https://pages.github.com/)
 - [x] [Webpack](https://github.com/webpack/webpack)
   - [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) <br> Plugin to analyze the resulting bundle.js. The report can be found [here](https://openscript.github.io/webquote/report.html).
 - [ ] [Enzyme](https://github.com/airbnb/enzyme)
 
A production build is automatically deployed to [Github Pages](https://openscript.github.io/webquote). 
 
## Development
This section describes how webquote is developed and how you can take part.

### Contribute
 - Use [this guide line](https://chris.beams.io/posts/git-commit/) to write your commit messages.
 - Use [trunk-based development](https://trunkbaseddevelopment.com/) for utilizing our repository.
 - Use `en-US` as primary language.

### Set up
Follow these steps to get started:
1. Make sure NodeJS and Yarn is installed
   1. On MacOSx with homebrew <br> `brew install yarn`
   1. On Ubuntu/Debian with apt
      1. Add the [NodeJS](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions) repository <br> `curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -`
      1. Install the [Yarn](https://yarnpkg.com/lang/en/docs/install/#linux-tab) repository key <br> `curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -`
      1. Add the [Yarn](https://yarnpkg.com/lang/en/docs/install/#linux-tab) repository <br> `echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list`
      1. Update repositories <br> `apt update`
      1. Install Yarn <br> `apt install nodejs yarn`
   1. On Arch with pacman <br> `pacman -S yarn`
1. Install dependencies <br> `yarn install`
1. Start the webpack server <br> `yarn dev`
