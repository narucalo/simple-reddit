import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Subreddit from './components/Subreddit';
import Post from './components/Post';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/subreddit/:id" component={Subreddit} />
          <Route path="/post/:id" component={Post} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
