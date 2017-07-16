import React from "react"
import Link from "gatsby-link"
import styled, { css } from 'styled-components';

import Footer from "../components/Footer.js";

import "../css/sanitize.css";
import "../css/style.css";

const Wrapper = styled.div `
  max-width: 50rem;
  margin: 0 auto;
  padding: 3.5rem 1.5rem 0 1.5rem;
`;

const NavigationList = styled.ul `
  display: flex;
  justify-content: center;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }
`;

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header
      header = (

      <div>

        <nav>
          <NavigationList>
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
          </NavigationList>
        </nav>
      </div>
      )

    return (
      <Wrapper>
        {header}
        {children()}
        <Footer />
      </Wrapper>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.function,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
