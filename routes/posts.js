const express = require('express');
const router = express.Router();
const passport = require('passport');
const Post = require('../models/Post');
const Upvote = require('../models/Upvote');

// Get a post by ID
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new post
router.post('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const newPost = new Post({
      subredditId: req.body.subredditId,
      userId: req.user.id,
      title: req.body.title,
      content: req.body.content,
    });
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Upvote a post
router.post('/:id/upvote', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const upvote = new Upvote({
      postId: req.params.id,
      userId: req.user.id,
    });
    await upvote.save();
    res.json(upvote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
