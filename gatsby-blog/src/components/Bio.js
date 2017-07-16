import React from "react"
import Link from "gatsby-link"
import styled, { css } from 'styled-components';

import profilePic from "./profile-pic.png"

const Header = styled.div `
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding-top: 1rem;
  }
`;

const HeaderImage = styled.img `
  margin-bottom: 0;
  width: 115px;
  height: 115px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const HeaderProfile = styled.div `
  @media screen and (min-width: 768px) {
    margin-left: 1.25rem;
  }
`

const HeaderProfileIntro = styled.p `
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  line-height: 1;
`;

const HeaderProfileName = styled.h1 `
  margin-top: 0;
  font-size: 2.6rem;
  margin-top: -3px;
  line-height: 1;
  margin-bottom: 0;
`;

const HeaderProfileTitle = styled.p `
  font-size: 1.35rem;
  margin-top: 0.25em;
  margin-bottom: 0;
  font-weight: 300;
  color: #aaa;
`;

const HeaderProfileTitleLink = styled.a `
  text-decoration: none;
  color: #5694f1;
`;

class Bio extends React.Component {
  render() {
    return (
      <main className="site-main" role="main">
        <Header>

          <div>

            <HeaderImage
              src={profilePic}
              alt={`Marcus Tisäter`}
            />

          </div>

          <HeaderProfile>
            <HeaderProfileIntro>
              Hi, I am
            </HeaderProfileIntro>
            <HeaderProfileName>
              Marcus Tisäter
            </HeaderProfileName>

              <HeaderProfileTitle>
              Front-end developer at
              {" "}
              <HeaderProfileTitleLink
                  target="_blank"
                  href="http://www.happiness.se"
                >
                Happiness
              </HeaderProfileTitleLink>
            </HeaderProfileTitle>
          </HeaderProfile>
        </Header>
		   </main>
    )
  }
}

export default Bio
