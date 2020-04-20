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
    type: Number,
    required: true
  },
  challengee_id : {
    type: Number,
    required: true
  },
  author_start_cals: {
    type: Number
  },
  challengee_start_cals: {
    type: Number
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