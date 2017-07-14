import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Bio from '../components/Bio.js';

import postcssImage from "./img/postcss.png"
import wpsvImage from "./img/wpsv.png"
import meetupImage from "./img/meetup.png"
import blogImage from "./img/blog.png"
import boxingImage from "./img/boxing.png"

export default class About extends React.Component {
  render() {
    return (
      <div>

        <Bio />

        <ul style={{padding: 0, margin: 0}}>

          <li style={{
            padding: "2rem 2rem 2rem 0",
            lineHeight: "1.5",
            display: "flex",
            alignItems: "center",
            borderColor: "rgba(0,0,0,.1)",
            borderBottomStyle: "solid",
            borderBottomWidth: "1px"
          }}>
            <img
              src={boxingImage}
              alt={`boxing`}
              style={{
                width: "5rem",
                borderRadius: "100%"
              }}
            />
              <div
                style={{
                  flex: "1 1 auto",
                  minWidth: "0",
                  minHeight: "0",
                  paddingLeft: "1rem"
                }}
              >
                <p style={{fontSize: "1.25rem", marginBottom: "0", marginTop: "0"}}>Training</p>
                <p style={{margin: 0}}>I practice mixed martial arts on a regular basis to keep up.</p>              </div>
          </li>

          <li style={{
            padding: "2rem 2rem 2rem 0",
            lineHeight: "1.5",
            display: "flex",
            alignItems: "center",
            borderColor: "rgba(0,0,0,.1)",
            borderBottomStyle: "solid",
            borderBottomWidth: "1px"
          }}>
            <img
              src={postcssImage}
              alt={`postcss`}
              style={{
                width: "5rem",
                borderRadius: "100%"
              }}
            />
              <div
                style={{
                  flex: "1 1 auto",
                  minWidth: "0",
                  minHeight: "0",
                  paddingLeft: "1rem"
                }}
              >
                <p style={{fontSize: "1.25rem", marginBottom: "0", marginTop: "0"}}>postcss.org</p>
                <p style={{margin: 0}}>I lead the scrum of postcss.org and helped with the development in React</p>
              </div>
          </li>

          <li style={{
            padding: "2rem 2rem 2rem 0",
            lineHeight: "1.5",
            display: "flex",
            alignItems: "center",
            borderColor: "rgba(0,0,0,.1)",
            borderBottomStyle: "solid",
            borderBottomWidth: "1px"
          }}>
            <img
              src={wpsvImage}
              alt={`wordpress sverige`}
              style={{
                width: "5rem",
                borderRadius: "100%"
              }}
            />
              <div
                style={{
                  flex: "1 1 auto",
                  minWidth: "0",
                  minHeight: "0",
                  paddingLeft: "1rem"
                }}
              >
                <p style={{fontSize: "1.25rem", marginBottom: "0", marginTop: "0"}}>WordPress Sverige</p>
                <p style={{margin: 0}}>I help organize meetups in Stockholm, also last years WordCamp Stockholm 2016 at Internetdagarna.</p>
              </div>
          </li>

          <li style={{
            padding: "2rem 2rem 2rem 0",
            lineHeight: "1.5",
            display: "flex",
            alignItems: "center",
            borderColor: "rgba(0,0,0,.1)",
            borderBottomStyle: "solid",
            borderBottomWidth: "1px"
          }}>
            <img
              src={blogImage}
              alt={`blog`}
              style={{
                width: "5rem",
                height: "5rem",
                borderRadius: "100%"
              }}
            />
              <div
                style={{
                  flex: "1 1 auto",
                  minWidth: "0",
                  minHeight: "0",
                  paddingLeft: "1rem"
                }}
              >
                <p style={{fontSize: "1.25rem", marginBottom: "0", marginTop: "0"}}>Skills</p>
                <p style={{margin: 0}}>I focus on writing semantic markup with accessibility in mind, I do a lot of script tooling such as gulp and webpack, also been working with MVCs like React and Vue.</p>
              </div>
          </li>

          <li style={{
            padding: "2rem 2rem 2rem 0",
            lineHeight: "1.5",
            display: "flex",
            alignItems: "center",
            borderColor: "rgba(0,0,0,.1)",
            borderBottomStyle: "solid",
            borderBottomWidth: "1px"
          }}>
            <img
              src={meetupImage}
              alt={`speaker`}
              style={{
                width: "5rem",
                borderRadius: "100%"
              }}
            />
              <div
                style={{
                  flex: "1 1 auto",
                  minWidth: "0",
                  minHeight: "0",
                  paddingLeft: "1rem"
                }}
              >
                <p style={{fontSize: "1.25rem", marginBottom: "0", marginTop: "0"}}>Speaker</p>
                <p style={{margin: 0}}>Sometimes I speak at conferences and meetups</p>
              </div>
          </li>

        </ul>
      </div>
    );
  }
}
