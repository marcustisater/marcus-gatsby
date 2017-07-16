import React from "react"
import Link from "gatsby-link"
import styled, { css } from 'styled-components';

const FooterSection = styled.footer `
  margin-top: 2.5rem;

  @media screen and (min-width: 768px) {
    margin-top: 5rem;
    text-align: right;
    margin-bottom: 2rem;
  }
`;

const FooterSectionText = styled.p `
  margin: 0;
`;

class Footer extends React.Component {
  render() {
    return (
      <FooterSection className="Footer" role="contentinfo">
        <FooterSectionText> Want to get in touch? <a href="mailto:marcus.tisater@gmail.com"> Mail me! </a></FooterSectionText>
        <FooterSectionText> This blog is built with <a href="https://www.gatsbyjs.org/">Gatsby</a> on top of React and GraphQL </FooterSectionText>
      </FooterSection>
    )
  }
}

export default Footer
