const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  subredditId: { type: Schema.Types.ObjectId, ref: 'Subreddit', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  creationTime: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', PostSchema);
