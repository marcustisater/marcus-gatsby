import React from "react"
import Link from "gatsby-link"
import { Container } from "react-responsive-grid"

import profilePic from "./profile-pic.png"

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
              <Link style={{ color: "#5694f1", padding: "0.4rem 0.8rem" }} to="/blog">
                Blog
              </Link>
            </li>

            <li>
              <Link style={{ color: "#5694f1", padding: "0.4rem 0.8rem" }} to="/speaking">
                Speaking
              </Link>
            </li>

            <li>
              <Link style={{ color: "#5694f1", padding: "0.4rem 0.8rem" }} to="https://github.com/marcustisater">
                GitHub
              </Link>
            </li>

            <li>
              <Link style={{ color: "#5694f1", padding: "0.4rem 0.8rem" }} to="https://twitter.com/marcustister">
                Twitter
              </Link>
            </li>
          </ul>
        </nav>

        <div className="headerFlex container"
          style={{
            paddingTop: "3rem",
            paddingBottom: "3rem",
            display: "flex",
          }}
        >

          <div>

            <img
              className="headerFlexImage"
              src={profilePic}
              alt={`Marcus Tisäter`}
              style={{
                marginBottom: 0,
                width: "95px",
                height: "95px",
              }}
            />

          </div>

          <div>

            <h1
              style={{
                marginTop: 0,
                fontSize: "3rem",
                marginTop: 0,
                lineHeight: "1",
                letterSpacing: "-2px",
                marginBottom: "0"
              }}
            >
              <Link
                style={{
                  boxShadow: "none",
                  textDecoration: "none",
                  color: "inherit",
                }}
                to={"/"}
              >
                Marcus Tisäter
              </Link>
            </h1>

              <p style={{
                fontSize: "1.35rem",
                marginTop: "0",
                marginBottom: "0",
                fontWeight: "300"

              }}>
              Front-end developer at
              {" "}
              <Link
                style={{
                  boxShadow: "none",
                  textDecoration: "none",
                  color: "#5694f1",
                  }}
                  to={"/"}
                >
                Happiness
              </Link>
            </p>
          </div>
        </div>
      </div>
      )

    return (
      <Container>
        {header}
        {children()}
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
