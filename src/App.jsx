import React, {useEffect} from 'react';
import "./App.css"

function App (){

  const [posts, setPosts] = useState([]);
  useEffect(() => {

    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      }
  }
  }

)} 