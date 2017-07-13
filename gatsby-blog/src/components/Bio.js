import React from "react"
import Link from "gatsby-link"

import profilePic from "./profile-pic.png"

class Bio extends React.Component {
  render() {
    return (
      <main className="site-main" role="main">
        <div className="header"
          style={{
            paddingTop: "3rem",
            paddingBottom: "3rem",
            display: "flex",
            alignItems: "center",
          }}
        >

          <div>

            <img
              className="headerFlexImage"
              src={profilePic}
              alt={`Marcus Tisäter`}
              style={{
                marginBottom: 0,
                width: "125px",
                height: "125px",
              }}
            />

          </div>

          <div style={{
            marginLeft: "1.25rem"
          }}>

            <h1
              style={{
                marginTop: 0,
                fontSize: "3.25rem",
                marginTop: 0,
                lineHeight: "1",
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
                marginTop: "0.25em",
                marginBottom: "0",
                fontWeight: "300",
                color: "#aaa",

              }}>
              Front-end developer at
              {" "}
              <a
                style={{
                  boxShadow: "none",
                  textDecoration: "none",
                  color: "#5694f1",
                  }}
                  target="_blank"
                  href="http://www.ottoboni.se"
                >
                Ottoboni Group
              </a>,
              <p style={{margin:0}}>
                part of nordic morning
              </p>
            </p>
          </div>
        </div>
		   </main>
    )
  }
}

export default Bio
