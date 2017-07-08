import React from "react"
import Link from "gatsby-link"

class Footer extends React.Component {
  render() {
    return (
      <footer className="Footer" role="contentinfo" style={{margin: "3rem"}}>
        <p>Want to get in touch? <Link mailto="marcus.tisater@gmail.com"> Mail me! </Link> 😎</p>
        <p> Built with Gatsby on top of React and Graphql </p>
      </footer>
    )
  }
}

export default Footer
