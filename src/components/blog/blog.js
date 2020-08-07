import React from 'react';
import { Title, Author, Linked } from './blog.css';

const Blog = () => {
  return (
    <div>
        <div>
            <Title><span role="img" className="emoji-small" aria-label="writing hand emoji">✍️</span> Guest Author </Title>
            <Author>CSS-Tricks</Author>
            <Linked target="_blank" href="https://css-tricks.com/want-make-postcss-plugin/">So, you want to make a PostCSS plugin?</Linked>
        </div>
    </div>
  );
};
 
export default Blog;