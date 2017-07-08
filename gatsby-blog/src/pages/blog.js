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
          Blog
        </h2>

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
