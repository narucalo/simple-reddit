const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UpvoteSchema = new Schema({
  postId: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Upvote', UpvoteSchema);
