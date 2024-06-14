import React, {useEffect, useState } from 'react';
import "./App.css"
function App (){

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
)}

if (loading) {
  return <div>Loading...</div>;
}

export default App;