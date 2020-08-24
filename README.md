# Katy Solovewicz 
## Software Developer Portfolio

[View Live](https://kwicz.github.io/portfolio/)

### Installation
1. Setup Gatsby dependencies as needed.  Gatsby has an [excellent tutorial](https://www.gatsbyjs.org/tutorial/part-zero/) for walking through installation instructions.
2. Clone this repository from GitHub and move into your new directory.
```sh
git clone https://github.com/kwicz/portfolio.git
cd portfolio
```
3. Use your new Gatsby CLI from step one to start your local server:
```sh
gatsby develop
```
4. Voila!  You now have a new project up and running at http://localhost:8000/!

### Deployment to GH Pages
1. Navigate to package.json and confirm the following is included under `scripts`:
```sh
"deploy": "npm run clean && gatsby build --prefix-paths && gh-pages -d public",
```
2. Push your project to a repo in GitHub.  In `Settings` go to GitHub Pages and under `Source`, select `gh-pages branch`.

3. While in the directory of your project in the terminal, run:
```sh
npm run deploy
```
4. In your GitHub repository's `Settings` reset the Custom Domain if needed.

5. Navigate to `https://{your-username}.github.io/{your-repo-name}/` and you should see your deployed project!



### Technologies Used
* [React.js](https://reactjs.org/)
* [Material-UI](https://material-ui.com/)
* [Gatsby JS](https://www.gatsbyjs.org/)
* [Gatby Starter Prologue](https://www.gatsbyjs.org/starters/anubhavsrivastava/gatsby-starter-prologue/) by Anubhav Srivatstava
* Avatar Artwork by [Jeremy Kale Padot](https://kalepadot.com)

### Support and Contact Details
_Have a bug or an issue with this application? [Open a new issue](https://github.com/kwicz/portfolio/issues) here on GitHub._

### License

[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](LICENSE)

Copyright (c) 2020 **_K. Wicz_**
