import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <header class="headingcontainer">
          <div class="profile">
            {/* <a href="/about">
              <img class="profile-avatar" src="wp-content/themes/marcustisater/image/marcus.png">
            </a> */}
            <div class="profile-name">
              <h1 class="profile-name-headline f1 mt0 mb0 lh-title">Marcus Tisäter</h1>
              <h2 class="profile-name-description mt0 mb0">Front-end developer at <a class="nounderline" href="http://happiness.se">Happiness</a></h2>
            </div>
          </div>
        </header>

        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    )
  }
}
