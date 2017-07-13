import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import { rhythm } from "../utils/typography"

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <div>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        />

        <div style={{
          textAlign: "right",
          paddingLeft: "4rem",
          paddingRight: "4rem",
          paddingTop: "1rem",
        }}>

            <a style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  padding: "0.75rem 1rem",
                  color: "#5694f1",
                }}
              >
                Home
              </Link>
            </a>

            <a style={{ margin: 0 }}>
              <Link
                to="/about"
                style={{
                  textDecoration: "none",
                  padding: "0.75rem 1rem",
                  color: "#5694f1",
                }}
              >
                About
              </Link>
            </a>

            <a style={{ margin: 0 }}>
              <Link
                to="/blog"
                style={{
                  textDecoration: "none",
                  padding: "0.75rem 1rem",
                  color: "#5694f1",
                }}
              >
                Blog
              </Link>
            </a>

            <a style={{ margin: 0 }}>
              <Link
                to="/speaking"
                style={{
                  textDecoration: "none",
                  padding: "0.75rem 1rem",
                  color: "#5694f1",
                }}
              >
                Speaking
              </Link>
            </a>

            <a style={{ margin: 0 }}>
              <Link
                to="https://github.com/marcustisater"
                style={{
                  textDecoration: "none",
                  padding: "0.75rem 1rem",
                  color: "#5694f1",
                }}
              >
                Github
              </Link>
            </a>
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
            paddingTop: 0,
          }}
        >
          {this.props.children()}
        </div>
      </div>
    )
  }
}
