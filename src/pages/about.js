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
  height: 4rem;
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

        <HeadLine>

          <HeadLineText> Who am I? </HeadLineText>

          <HeadLineText> 🙄 </HeadLineText>

        </HeadLine>

        <p> I have been building web sites and appliactions for over 5 years profesionally now and still loving it.

            Last year I helped organized <a href="https://2017.stockholm.wordcamp.org/">WordCamp Stockholm 2017</a> and the year before that I was involved within the <a href="https://github.com/postcss">PostCSS Team</a>.

            Lately I have been taking time to deeply learning JavaScript to work with nodejs appliactions and improve my skills within MVCs like React and Angular.

        </p>

        <p>
            You can find me on <a href="https://github.com/marcustisater">GitHub</a>, <a href="https://www.linkedin.com/in/marcus-tis%C3%A4ter-7a740480/">Linkedin</a> or <a href="https://twitter.com/MarcusTister">Twitter</a>.
        </p>

        <List>
          <ListItem>
            <ListItemImage
              src={meetupImage}
              alt={`speaker`}
            />
            <ListItemDescription>
                <ListItemDescriptionTitle>Occasionall Speaker</ListItemDescriptionTitle>
                <ListItemDescriptionContent>Sometimes I speak at conferences and meetups.</ListItemDescriptionContent>
            </ListItemDescription>
          </ListItem>
        </List>

      </div>
    );
  }
}
