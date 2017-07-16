import React from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import get from "lodash/get"
import styled, { css } from 'styled-components';

import Bio from "../components/Bio"
import Author from "../components/Author.js";

const BlogHeadline = styled.h1 `
  background: #333;
  color: #fff;
  padding: 0.2rem;
`;


class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, "data.site.siteMetadata.title")

    return (
      <div className="container">
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />

        <BlogHeadline>
          {post.frontmatter.title}
        </BlogHeadline>

        <p>
          {post.frontmatter.date}
        </p>

        <div dangerouslySetInnerHTML={{ __html: post.html }} />

        <hr style={{margin: "3.5rem 0 0 0"}}/>

        <Author />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
