import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled, { css } from 'styled-components';

import Bio from '../components/Bio.js';

import postcssImage from "./img/postcss.png"
import wpsvImage from "./img/wpsv.png"
import meetupImage from "./img/meetup.png"
import blogImage from "./img/blog.png"
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


export default class About extends React.Component {
  render() {
    return (
      <div>

        <Bio />

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
              src={blogImage}
              alt={`blog`}
            />
            <ListItemDescription>
              <ListItemDescriptionTitle>Skills</ListItemDescriptionTitle>
              <ListItemDescriptionContent>I focus on writing semantic markup with accessibility in mind, I do a lot of script tooling such as gulp and webpack, also been working with MVCs like React and Vue.</ListItemDescriptionContent>
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
