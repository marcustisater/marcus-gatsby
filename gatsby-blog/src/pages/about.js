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
`;

const ListItem = styled.li`
  padding: 2rem 2rem 2rem 0;
  lineHeight: 1.5;
  display: flex;
  alignItems: center;
  border-color: rgba(0,0,0,.1);
  border-bottom-style: solid;
  border-bottom-width: 1px;
`;

const ListItemImage = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
`;

const ListItemDescription = styled.div`
  flex: 1 1 auto;
  min-width: 0;
  min-hight: 0;
  padding-left: 1rem;
`;

const ListItemDescriptionTitle = styled.p`
  font-size: 1.25rem;
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
`

export default class About extends React.Component {
  render() {
    return (
      <div>

        <HeadLine> Hi, I'm

          <HeadLineText> Marcus Tisäter </HeadLineText>

          <HeadLineText> 🙄 </HeadLineText>

        </HeadLine>

        <p> I'm a front-end developer that loves writing semantic markup and structured CSS. </p>

        <p> I have a big heart for Open Source, I work with well known teams like PostCSS, supporting GatsbyJS and </p>

        <p>I do a lot of script tooling such as gulp and webpack, also been working with MVCs like React and Vue.

         I have a big heart for open source as I am contributing to projects to help out. My latest contributed project was postcss were I worked closely with Andrey Sitnik, Max Stobier and many more developers to create postcss.org.

        Besides coding, I strive to be as athletic as I can be by doing MMA. I also have a two year old bernese mountain dog… that eats a lot of food 😂
        </p>

        <p> I also do.. </p>
        <List>

          <ListItem>
            <ListItemImage
              src={boxingImage}
              alt={`boxing`}
            />
              <ListItemDescription>
                <ListItemDescriptionTitle>Training</ListItemDescriptionTitle>
                <ListItemDescriptionContent>I practice mixed martial arts and </ListItemDescriptionContent>
              </ListItemDescription>
          </ListItem>

          <ListItem>
            <ListItemImage
              src={postcssImage}
              alt={`postcss`}
            />
            <ListItemDescription>
                <ListItemDescriptionTitle>PostCSS</ListItemDescriptionTitle>
                <ListItemDescriptionContent>I lead the scrum of postcss.org and helped with the development in React. I am trying to help the community grow.</ListItemDescriptionContent>
            </ListItemDescription>
          </ListItem>

          <ListItem>
            <ListItemImage
              src={wpsvImage}
              alt={`wordpress sverige`}
            />
            <ListItemDescription>
              <ListItemDescriptionTitle>WordPress Sverige</ListItemDescriptionTitle>
              <p style={{margin: 0}}>I help organize meetups in Stockholm, also last years WordCamp Stockholm 2016 at Internetdagarna.</p>
            </ListItemDescription>
          </ListItem>

          <ListItem>
            <ListItemImage
              src={meetupImage}
              alt={`speaker`}
            />
            <ListItemDescription>
                <ListItemDescriptionTitle>Speaker</ListItemDescriptionTitle>
                <ListItemDescriptionContent>Sometimes I speak at conferences and meetups</ListItemDescriptionContent>
            </ListItemDescription>
          </ListItem>
        </List>
      </div>
    );
  }
}
