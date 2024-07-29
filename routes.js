const express = require('express');
const router = express.Router();
const passport = require('passport');
require('./config/passport')(passport);

// Import routes
router.use('/subreddits', require('./routes/subreddit'));
router.use('/users', require('./routes/users'));
router.use('/posts', require('./routes/posts'));
router.use('/comments', require('./routes/comments'));
router.use('/upvotes', require('./routes/upvotes'));

module.exports = router;
