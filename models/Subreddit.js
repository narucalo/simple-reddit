const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubredditSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
});

module.exports = mongoose.model('Subreddit', SubredditSchema);
