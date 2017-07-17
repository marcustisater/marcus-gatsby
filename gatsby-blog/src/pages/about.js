import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled, { css } from 'styled-components';

import postcssImage from "./img/postcss.png"
import wpsvImage from "./img/wpsv.png"
import meetupImage from "./img/meetup.png"
import boxingImage from "./img/boxing.png"

const List = styled.ul`
  margin: 0;
  padding: 0;
  border-top: 1px solid #e5e5e5;
  margin-top: 2rem;
`;

const ListItem = styled.li`
  padding: 1.5rem 0;
  lineHeight: 1.5;
  display: flex;
  align-items: center;
`;

const ListItemImage = styled.img`
  height: 7rem;
  border-radius: 100%;
`;

const ListItemDescription = styled.div`
  flex: 1 1 auto;
  min-width: 0;
  min-hight: 0;
  padding-left: 1rem;
`;

const ListItemDescriptionTitle = styled.p`
  font-size: 1.35rem;
  margin-bottom: 0;
  margin-top: 0;
`;

const ListItemDescriptionContent = styled.p`
  margin: 0;
`;

const HeadLine = styled.h1 `
  font-size: 1.5rem;
`;

const HeadLineText = styled.span `
  display: block;
  font-size: 2rem;
  margin-top: -5px;
`

export default class About extends React.Component {
  render() {
    return (
      <div>

        <HeadLine> Hi, I'm

          <HeadLineText> Marcus Tisäter </HeadLineText>

          <HeadLineText> 🙄 </HeadLineText>

        </HeadLine>

        <p> I'm a front-end developer that loves writing semantic markup and structured RWD CSS. </p>

        <p>I do a lot of script tooling such as gulp and webpack, also working with MVCs like React and Vue. </p>

        <p> I ❤️ open source, I have worked with people from the <a href="github.com/postcss/">PostCSS team</a> building great stuff and been part of an community. I'm now actively involved within the Swedish WordPress community, <a href="http://www.meetup.com/WordPress-Stockholm/">organzing meetups</a> and <a href="2017.stockholm.wordcamp.org">WordCamps</a> with great folks!

      </p> I also help maintain <a href="http://wpsv.se"> WordPress Sverige</a> and the <a href="http://sv.wordpress.org">installation language profile</a>.

        <List>

          <ListItem>
            <ListItemImage
              src={boxingImage}
              alt={`boxing`}
            />
              <ListItemDescription>
                <ListItemDescriptionTitle>Don't forget your health!</ListItemDescriptionTitle>
                <ListItemDescriptionContent>I practice mixed martial arts, trying to live an active lifestyle. You should too.</ListItemDescriptionContent>
              </ListItemDescription>
          </ListItem>

          <ListItem>
            <ListItemImage
              src={meetupImage}
              alt={`speaker`}
            />
            <ListItemDescription>
                <ListItemDescriptionTitle>Occasionall Speaker</ListItemDescriptionTitle>
                <ListItemDescriptionContent>Sometimes I speak at conferences and meetups. You should do it as well.</ListItemDescriptionContent>
            </ListItemDescription>
          </ListItem>
        </List>

      </div>
    );
  }
}
