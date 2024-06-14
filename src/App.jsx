import React, {useEffect, useState } from 'react';
import "./App.css"
import image from './images/error-message.png'

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async  () => {
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
          setloading (false);
        }
      };

  fetchPosts()
}
 
    return (
    <div className='App'> 
    <h1>Blog Posts</h1>
    {loading ? (<p>Loading...</p>)
    : error ? 
    (      
    <div className="error-message">
      <img src={image} alt=" " /> 
    </div>
    ):
    }
    </div>
    );
    
export default App;