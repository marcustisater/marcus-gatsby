import React from 'react';

import { Title, Linked, LinkedWrap } from './social.css.js';

const SocialLinks = () => {
  return (
    <div>
        <Title><span role="img" className="emoji-small" aria-label="selfie emoji">🤳</span> Find me here</Title>
        <LinkedWrap>
            <Linked targt="_blank" href="https://twitter.com/MarcusTister">Twitter</Linked>
        </LinkedWrap>
        <LinkedWrap>
            <Linked target="_blank" href="https://github.com/marcustisater">Github</Linked>
        </LinkedWrap>
    </div>
  );
};

export default SocialLinks;
 