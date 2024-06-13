import React, {useEffect, useState } from 'react';
import "./App.css"
function App (){

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchPosts = async  () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      }
       if (!response.ok) {
          throw new Error('Posts not available'); 
        }
  }
  }

)} 
export default App;