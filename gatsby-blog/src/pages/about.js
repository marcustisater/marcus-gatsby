import React from "react"
import Link from "gatsby-link"
import get from "lodash/get"
import Helmet from "react-helmet"

import Bio from "../components/Bio"
import Footer from "../components/Footer"

class BlogIndex extends React.Component {
  render() {
    return (
      <div className="container">
        <Helmet title={get(this, "props.data.site.siteMetadata.title")} />
        <h2 style={{
          display: "inline",
          backgroundColor: "rgba(0,0,0,.9)",
          color: "#fff",
          padding: "0.25rem",
          lineHeight: "1.5",
          fontSize: "3rem",
          letterSpacing: "-.05em"
        }}>
          About
        </h2>

        <p>
          Hello 👋 My name is Marcus Tisäter and I work as a front-end developer for happiness.se
          building websites in Drupal and WordPress.
          My biggest passion is CSS, I strive to master it as most developers gets frustrated when it comes to writing it.
          I focus on writing semantic markup with a11y(accessibility) in mind,
          I do a lot of script tooling such as gulp and webpack, also been working with MVCs like React and Vue.
        </p>

        <p>
          I help organize WordPress meetups in Stockholm every month and the yearly WordCamp with great folks.
          I also help maintain the official WordPress language installation at sv.wordpress.org and wpsv.se.
        </p>

        <p>
          I have a big heart for open source as I am contributing to projects to help out. My latest contributed project was postcss were
          I worked closely with Andrey Sitnik, Max Stobier and many more developers to create postcss.org.
        </p>

        <p>
          Besides coding, I strive to be as athletic as I can be by doing MMA.
          I also have a two year old bernese mountain dog… that eats a lot of food 😂
        </p>

        <Footer />
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
