import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

export default class Speaking extends React.Component {
  render() {
    return (
      <div>
        <h3>I spoke at 🙊</h3>

        <p>Brandson about PostCSS. <a href="http://marcustisater.github.io/postcss-presentation/">http://marcustisater.github.io/postcss-presentation/</a></p>
        <p>NOX about PostCSS in depth. <a href="http://slides.com/marcustisater/postcss">http://slides.com/marcustisater/postcss</a></p>
        <p>IIS (Internetstiftelsen i Sverige) about the swedish WordPress community. <a href="http://slides.com/marcustisater/deck/">http://slides.com/marcustisater/postcss</a></p>

        <h3>>Upcoming talks</h3>

        <p>CSS Grid Layout, TBD</p>
      </div>
    );
  }
}
