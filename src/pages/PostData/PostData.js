import React from 'react';
import './PostData.css';
const PostData = ({ post }) => {
    return (
        <div className='display-post'>
            <h4>Post id: {post.id} </h4>
            <h5>Post title: {post.title}</h5>
            <p>Post body: <span>{post.body}</span></p>
        </div>
    );
};

export default PostData;