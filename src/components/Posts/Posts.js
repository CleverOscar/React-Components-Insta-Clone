import React from 'react';
import Post from './Post';
import './Posts.css';
 
const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props.posts;

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */
      console.log('Posts Component',props.posts.map(post => post))
      }
      {/* Check the implementation of Post to see what props it requires! */}
      <h1> Posts Coponent </h1>
      <Post post={props.posts} />
    </div>
  );
};

export default Posts;
