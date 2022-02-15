import React from 'react';
import './Posts.css';
import Post from './Post'

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires!_post & likePost */}
      {posts.map(post => {
        return <Post post={post} likePost={likePost} key={post.id} />
      })}
    </div>
  );
};

export default Posts;
