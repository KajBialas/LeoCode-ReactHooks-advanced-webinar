import React, { useReducer, useEffect } from 'react';

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts/1';

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
  data: {},
};

function blogReducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        isLoading: true,
        isError: false,
        data: action.value
      };
    case 'SET_ERROR':
      return {
        isLoading: false,
        isError: true,
        data: {}
      };
    case 'SET_DATA':
      return {
        isLoading: false,
        isError: false,
        data: action.value
      };
  }
}
function Blog() {
  const [blogPost, dispatch] = useReducer(blogReducer, INITIAL_STATE);

  useEffect(() => {
    dispatch({type: 'SET_LOADING'});

    fetch(API_ENDPOINT)
      .then(response => response.json())
      .then(data => {
        dispatch({type: 'SET_DATA', value: {...data}});
      })
      .catch(() => dispatch( {type:'SET_ERROR'}));
  }, []);

  return (
    <div>
      {blogPost.isLoading
        ? <div>Loading...</div>
        : <div>
          <h1>{blogPost.data.title}</h1>
          <div>{blogPost.data.body}</div>
        </div> }
    </div>
  )
}

export default Blog;