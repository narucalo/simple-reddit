const express = require('express');
const router = express.Router();
const passport = require('passport');
const Upvote = require('../models/Upvote');

// Get upvotes for a post
router.get('/post/:postId', async (req, res) => {
  try {
    const upvotes = await Upvote.find({ postId: req.params.postId });
    res.json(upvotes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Upvote a post
router.post('/post/:postId', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const upvote = new Upvote({
      postId: req.params.postId,
      userId: req.user.id,
    });
    await upvote.save();
    res.json(upvote);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
