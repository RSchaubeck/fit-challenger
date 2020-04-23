const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupchallSchema = new Schema({
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
  },
  creator_id: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

module.exports = Groupchall = mongoose.model("Groupchall", GroupchallSchema);