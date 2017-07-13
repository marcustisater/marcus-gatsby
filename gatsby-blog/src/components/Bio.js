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
                width: "95px",
                height: "95px",
              }}
            />

          </div>

          <div style={{
            marginLeft: "1rem"
          }}>

            <h1
              style={{
                marginTop: 0,
                fontSize: "2.3rem",
                marginTop: 0,
                lineHeight: "1",
                letterSpacing: "-1px",
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
                fontSize: "1.25rem",
                marginTop: "0.25em",
                marginBottom: "0",
                fontWeight: "300",
                color: "#aaa",

              }}>
              Front-end developer at
              {" "}
              <Link
                style={{
                  boxShadow: "none",
                  textDecoration: "none",
                  color: "#5694f1",
                  }}
                  to={"/"}
                >
                Ottoboni Group
              </Link>
              <p style={{margin:0}}>
                part of Nordic Morning
              </p>
            </p>
          </div>
        </div>
		   </main>
    )
  }
}

export default Bio
