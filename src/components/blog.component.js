import React, { useState, useEffect } from 'react';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts/1';

function Blog() {
  const [blogPost, setBlogPost] = useState({});
  const [loadStatus, setLoadStatus] = useState({
    isLoading: true,
    isError: true,
  });

  useEffect(() => {
    setLoadStatus({
      isLoading: true,
      isError: false,
    });

    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(data => {
        setBlogPost({...data});
        setLoadStatus({
          isLoading: false,
          isError: false,
        });
      })
      .catch(() => setLoadStatus({
        isLoading: false,
        isError: true,
      }));
  }, []);

  return (
    <div>
      {loadStatus.isLoading
        ? <div>Loading...</div>
        : <div>
          <h1>{blogPost.title}</h1>
          <div>{blogPost.body}</div>
        </div> }
    </div>
  )
}

export default Blog;