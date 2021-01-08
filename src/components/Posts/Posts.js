import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  const { likePost, posts } = props;
  
  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */
      posts.map(post => 
        <div>
          <Post post={post}/>
        </div>)
      }
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
