import React from 'react';
import PropTypes from 'prop-types';
import { Name, Role, Location, Description  } from './title.css';

const Title = ({ children, as = 'span', size }) => {
  return (
    <div>
      <span className="emoji" role="img" aria-labelledby="Wave">👋</span> 
      <Name>
        Hello! <br /> 
        I am Marcus Tisäter.
      </Name>
      <Role>Front-end Engineer</Role>
      <Location>Based in Stockholm, Sweden.</Location>
    </div>
  );
};
 
Title.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.string,
  size: PropTypes.oneOf(['large']),
};

export default Title;
