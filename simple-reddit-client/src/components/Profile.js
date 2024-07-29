import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get('/api/users/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(response => setProfile(response.data))
      .catch(error => console.error('Error fetching profile:', error));
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h1>{profile.username}'s Profile</h1>
      <h2>Subscribed Subreddits</h2>
      <ul>
        {profile.subscriptions.map(sub => (
          <li key={sub._id}>{sub.name}</li>
        ))}
      </ul>
      <h2>Upvoted Posts</h2>
      <ul>
        {profile.upvotes.map(upvote => (
          <li key={upvote._id}>{upvote.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
