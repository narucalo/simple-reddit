import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [subreddits, setSubreddits] = useState([]);

  useEffect(() => {
    axios.get('/api/subreddits')
      .then(response => setSubreddits(response.data))
      .catch(error => console.error('Error fetching subreddits:', error));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {subreddits.map(subreddit => (
          <li key={subreddit._id}>
            <Link to={`/subreddit/${subreddit._id}`}>{subreddit.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
