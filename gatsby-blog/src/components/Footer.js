import React from "react"
import Link from "gatsby-link"

class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer" role="contentinfo" style={{margin: "3rem 0"}}>
        <p style={{marginBottom: 0}}>Want to get in touch? <Link mailto="marcus.tisater@gmail.com"> Mail me! </Link> 😎</p>
        <p style={{marginTop: 0}}> This blog is built with Gatsby on top of React and GraphQL </p>
      </footer>
    )
  }
}

export default Footer
