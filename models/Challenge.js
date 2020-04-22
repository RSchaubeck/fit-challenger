const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChallengeSchema = new Schema({
  category: {
    type: String,
    required: true
  },
  goal: {
    type: Number,
    required: true
  },
  author_id : {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  challengee_id : {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  author_start_cals: {
    type: Number,
    ref: 'users',
    required: true
  },
  challengee_start_cals: {
    type: Number,
    ref: 'users',
    default: "0",
    required: true
  },
  creation: {
    type: Date,
    default: Date.now
  },
  start: {
    type: Date,
    default: Date.now
  }
});

module.exports = Challenge = mongoose.model('challenge', ChallengeSchema);