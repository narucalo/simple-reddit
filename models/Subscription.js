const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubscriptionSchema = new Schema({
  subredditId: { type: Schema.Types.ObjectId, ref: 'Subreddit', required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Subscription', SubscriptionSchema);
