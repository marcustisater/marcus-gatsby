import React from "react"
import Link from "gatsby-link"
import get from "lodash/get"
import Helmet from "react-helmet"

import Bio from "../components/Bio"

class BlogIndex extends React.Component {
  render() {
    // console.log("props", this.props)
    const pageLinks = []
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const posts = get(this, "props.data.allMarkdownRemark.edges")
    posts.forEach(post => {
      if (post.node.path !== "/404/") {
        const title = get(post, "node.frontmatter.title") || post.node.path
        pageLinks.push(
          <li
            style={{
              marginBottom: "1rem",
              paddingTop: "1rem",
              borderTop: "1px solid #eee",
              fontSize: "1.2rem",
            }}
            key={post.node.frontmatter.path}
          >
            <Link style={{ boxShadow: "none", display: "flex" }} to={post.node.frontmatter.path}>

              <div style={{
                color: "#222",
              }}>
                {post.node.frontmatter.title}
              </div>

              <div style={{
                marginLeft: "1rem"
              }}>
                {"Read more.."}
              </div>
            </Link>
          </li>
        )
      }
    })

    return (
      <div>
        <Helmet title={get(this, "props.data.site.siteMetadata.title")} />
        {/*<h2 style={{fontSize: "3rem"}}> Hi <span style={{fontSize: "4.5rem"}}>👋</span></h2>*/}
        <Bio />
        <h2 style={{fontSize: "1.75rem"}}> Latest blog posts </h2>
        <ul style={{
          listStyleType: "none",
          margin: 0,
          padding: 0,
        }}>
          {pageLinks}
        </ul>
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
