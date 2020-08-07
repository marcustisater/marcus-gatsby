import React from 'react';

import { Title, Linked, LinkedWrap } from './open-source.css.js';

const OpenSource = () => {
  return (
    <div>
        <Title><span role="img" className="emoji-small" aria-label="muscle emoji">💪</span> Open source projects / Team member</Title>
        <LinkedWrap><Linked targt="_blank" href="https://postcss.org">PostCSS</Linked></LinkedWrap>
        <LinkedWrap><Linked target="_blank" href="https://github.com/gatsbyjs">Gatsby</Linked></LinkedWrap>
        <LinkedWrap><Linked target="_blank" href="https://github.com/wpsvse">WordPress Sweden</Linked></LinkedWrap>
    </div>
  );
};

export default OpenSource;
