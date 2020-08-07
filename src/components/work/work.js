import React from 'react';
import PropTypes from 'prop-types';
import { Title, WorkPlace, Role, WorkWrapper } from './work.css';

const Work = () => {
  return (
    <div>
        <WorkWrapper>
            <Title><span role="img" className="emoji-small" aria-label="wizard emoji">🧙‍♂️</span> Work experience</Title>
            <div><WorkPlace href="https://happiness.se" target="_blank">Happiness</WorkPlace></div>
            <Role>Software Engineer - 2013 to 2017 </Role>
        </WorkWrapper>

        <WorkWrapper>
            <div><WorkPlace href="https://ottoboni.se" target="_blank">Ottoboni</WorkPlace></div>
            <Role>Front-end Engineer - 2017 to 2018 </Role>
        </WorkWrapper>

        <WorkWrapper>
            <div><WorkPlace href="https://nordicmorning.com" target="_blank">Nordic Morning Sweden</WorkPlace></div>
            <Role>Front-end Engineer - 2017 present </Role>
        </WorkWrapper>
    </div>
  );
};
 
Work.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Work;
