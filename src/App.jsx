// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import "./App.css"
import image from './images/error-message.png'

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Posts not available'); 
        }
        const data = await response.json();
        setPosts(data);    
      } 
      catch (error){
        setError(error);
      }
      finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="App"> 
      <h1>Posts</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <div className="error-message">
          <img src={image} alt="Error" /> 
          <p>{error.message}</p>
        </div>
      ) : (
        <div className="post-list">
          {posts.map(post => (
            <div key={post.id} className="post">
              <h2>{post.id}. {post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App; 