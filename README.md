# webquote
A little wizard to create quotes for web sites, which is used as a demonstration and an evaluation of the following 
technologies:
 - Typescript, React and Redux
 - Material UI and styled components
 - Firebase database and deployment
 - Travis CI

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
1. Install dependencies <br> `yarn install`
1. Start the webpack server <br> `yarn dev`
