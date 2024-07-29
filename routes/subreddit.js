const express = require('express');
const router = express.Router();
const Subreddit = require('../models/Subreddit');
const Post = require('../models/Post');
const Subscription = require('../models/Subscription');

// Get all posts in a subreddit
router.get('/:subredditId/posts', async (req, res) => {
  try {
    const posts = await Post.find({ subredditId: req.params.subredditId }).sort({ creationTime: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Subscribe to a subreddit
router.post('/:subredditId/subscribe', async (req, res) => {
  try {
    const subscription = new Subscription({ subredditId: req.params.subredditId, userId: req.body.userId });
    await subscription.save();
    res.json(subscription);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Unsubscribe from a subreddit
router.delete('/:subredditId/unsubscribe', async (req, res) => {
  try {
    await Subscription.findOneAndDelete({ subredditId: req.params.subredditId, userId: req.body.userId });
    res.json({ message: 'Unsubscribed successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Submit a post to a subreddit
router.post('/:subredditId/posts', async (req, res) => {
  try {
    const post = new Post({
      subredditId: req.params.subredditId,
      userId: req.body.userId,
      title: req.body.title,
      content: req.body.content,
    });
    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
