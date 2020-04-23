const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateGroupChallInput = require('../../validation/groupchall');
const GroupChall = require("../../models/GroupChall");

router.post("/",
  passport.authenticate("jwt", {session:false}),
  (req, res)=>{
    const {isValid, errors} = validateChallengeInput(req.body);

  if (!isValid){
    return res.status(400).json(errors);
  }
  const newChallenge = new Challenge({
    category: req.body.category,
    goal: req.body.goal
  });
  newChallenge.save().then(challenge => res.json(challenge));
});

router.patch('/join/:groupchall_id', passport.authenticate("jwt", {session:false}), (req, res) => {
  Challenge.findByIdAndUpdate({_id: req.params.groupchall_id}, { $inc: {number_joined:1}},
    {new:true})
    .then(groupchall =>{ return res.json(groupchall)})
    .catch(err => res.status(404).json(err));
  });