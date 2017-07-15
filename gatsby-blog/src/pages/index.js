import React from "react"
import Link from "gatsby-link"
import get from "lodash/get"
import Helmet from "react-helmet"
import styled, { css } from 'styled-components';

import Bio from "../components/Bio"

const ArticleList = styled.li `
  margin-bottom: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
  font-size: 1.2rem;
`;

const ArticleListLink = styled.div `
  margin-left: 1rem;
`;

const ArticleListTitle = styled.div `
  color: #222;
`;

const BlogTitle = styled.h2 `
  font-size: 1.75rem;
`;

const BlogList = styled.ul `
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

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
          <ArticleList
            key={post.node.frontmatter.path}
          >
            <Link style={{ boxShadow: "none", display: "flex" }} to={post.node.frontmatter.path}>

              <ArticleListTitle>
                {post.node.frontmatter.title}
              </ArticleListTitle>

              <ArticleListLink>
                {"Read more.."}
              </ArticleListLink>
            </Link>
          </ArticleList>
        )
      }
    })

    return (
      <div>
        <Helmet title={get(this, "props.data.site.siteMetadata.title")} />
        <Bio />
        <BlogTitle> Latest blog posts </BlogTitle>
        <BlogList>
          {pageLinks}
        </BlogList>
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
