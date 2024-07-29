const express = require('express');
const router = express.Router();
const passport = require('passport');
const Comment = require('../models/Comment');

// Get comments for a post
router.get('/post/:postId', async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new comment
router.post('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const newComment = new Comment({
      postId: req.body.postId,
      userId: req.user.id,
      content: req.body.content,
    });
    const savedComment = await newComment.save();
    res.json(savedComment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
