import React from "react"
import Link from "gatsby-link"

class Author extends React.Component {
  render() {
    return (
      <div className="container">
        <h2> Thanks for reading 😍 </h2>
        <p> please share this on
          {" "}
          <a class="twitter-share-button"
            href="https://twitter.com/intent/tweet?url=<?=urlencode($url)?>">
            Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Author
