import React from "react"
import Link from "gatsby-link"

import postcssImage from "./postcss.png"
import wpsvImage from "./wpsv.png"
import meetupImage from "./meetup.png"
import blogImage from "./blog.png"

class Bio extends React.Component {
  render() {
    return (
      <main className="site-main" role="main">

        <ul style={{ maxWidth: "37rem", margin: "0 auto"}}>

          <li style={{
            padding: "2rem",
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
                width: "4rem",
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
                <Link className="readmore" to={"/how-we-built-postcss-org-with-an-open-source-team-of-collaborators/"}> Read more </Link>
              </div>
          </li>

          <li style={{
            padding: "2rem",
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
                width: "4rem",
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
                <Link className="readmore" to={"/about"}> Read more </Link>
              </div>
          </li>

          <li style={{
            padding: "2rem",
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
                width: "4rem",
                height: "4rem",
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
                <p style={{fontSize: "1.25rem", marginBottom: "0", marginTop: "0"}}>Blog</p>
                <p style={{margin: 0}}>Feel free to read some of my blog posts! I also write on websites like CSS-Tricks</p>
                <Link className="readmore" to={"/about"}> Read more </Link>
              </div>
          </li>

          <li style={{
            padding: "2rem",
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
                width: "4rem",
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
                <Link className="readmore" to={"/about"}> Read more </Link>
              </div>
          </li>

        </ul>
		   </main>
    )
  }
}

export default Bio
