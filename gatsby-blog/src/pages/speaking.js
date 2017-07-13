import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default class Speaking extends React.Component {
  render() {
    return (
      <div>
        <h3>I spoke at </h3>

        <p>Brandson about PostCSS. http://marcustisater.github.io/postcss-presentation/</p>
        <p>NOX about PostCSS in depth. http://slides.com/marcustisater/postcss</p>
        <p>IIS (Internetstiftelsen i Sverige) about the swedish WordPress community. http://slides.com/marcustisater/deck/</p>

        <h3>Upcoming talks</h3>

        <p>CSS Grid Layout, TBD</p>
      </div>
    );
  }
}
