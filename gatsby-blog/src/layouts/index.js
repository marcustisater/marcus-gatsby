import React from "react"
import Link from "gatsby-link"
import { Container } from "react-responsive-grid"
import Footer from "../components/Footer.js";

import "../css/sanitize.css";
import "../css/style.css";

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header
      header = (

      <div>

        <nav>
          <ul
            style={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "1rem"
            }}
          >
            <li>
              <Link style={{ color: "#5694f1", padding: "0.4rem 0.8rem" }} to="/">
                Home
              </Link>
            </li>

            <li>
              <Link style={{ color: "#5694f1", padding: "0.4rem 0.8rem" }} to="/about">
                About
              </Link>
            </li>

            <li>
              <Link style={{ color: "#5694f1", padding: "0.4rem 0.8rem" }} to="/speaking">
                Speaking
              </Link>
            </li>

            <li>
              <a style={{ color: "#5694f1", padding: "0.4rem 0.8rem" }} target="_blank" href="https://github.com/marcustisater">
                GitHub
              </a>
            </li>

            <li>
              <a style={{ color: "#5694f1", padding: "0.4rem 0.8rem" }} target="_blank" href="https://twitter.com/marcustister">
                Twitter
              </a>
            </li>
          </ul>
        </nav>
      </div>
      )

    return (
      <Container>
        {header}
        {children()}
        <Footer />
      </Container>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.function,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
