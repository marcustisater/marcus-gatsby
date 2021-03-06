import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import Header from 'components/header';
import GlobalStyle from 'global.css.js';
import { Container } from './layout.css.js';
import OpenSource from 'components/open-source';
import Work from 'components/work';
import Blog from 'components/blog';
import SocialLinks from 'components/social';

const Layout = ({ data, children }) => (
  <Container>
    <GlobalStyle />
    <Head />
    <Header title={data.site.siteMetadata.siteTitle} />
  </Container>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
