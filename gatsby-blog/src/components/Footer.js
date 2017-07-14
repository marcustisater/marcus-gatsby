import React from "react"
import Link from "gatsby-link"

class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer" role="contentinfo" style={{margin: "5rem 0 0 0", textAlign: "right"}}>
        <p style={{marginBottom: 0}}>Want to get in touch? <a href="mailto:marcus.tisater@gmail.com"> Mail me! </a></p>
        <p style={{marginTop: 0}}> This blog is built with <a href="https://www.gatsbyjs.org/">Gatsby</a> on top of React and GraphQL </p>
      </footer>
    )
  }
}

export default Footer
