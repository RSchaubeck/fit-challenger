const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupChallSchema = new Schema({
  category: {
    type: String,
    required: true
  },
  goal: {
    type: Number,
    required: true
  },
  creation: {
    type: Date,
    default: Date.now
  },
  number_joined: {
    type: Number,
    default: "0" 
  }
});

module.exports = GroupChall = mongoose.model("GroupChall", GroupChallSchema);