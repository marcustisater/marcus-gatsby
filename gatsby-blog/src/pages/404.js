import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default class Notfound extends React.Component {
  render() {
    return (
      <div>
        <h3>Whoops, 404 Not Found! </h3>

        <p> Seems like you found a broken link </p>

        <p> Let me know </p>

      </div>
    );
  }
}
