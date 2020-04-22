const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require("passport");
const validateGroupChallInput = require('../../validation/groupchall');
const Groupchall = require("../../models/Groupchall");
const User = require("../../models/User");

router.get("/:groupchall_id", passport.authenticate("jwt", { session: false }), (req, res) => {
  Groupchall.find({_id: req.params.groupchall_id}).then(groupchall =>{
    res.json(groupchall);
  }).catch(err => res.status(404).json(err)); 
});

router.post("/create",
  passport.authenticate("jwt", {session:false}),
  (req, res)=>{
    const {isValid, errors} = validateGroupChallInput(req.body);

  if (!isValid){
    return res.status(400).json(errors);
  }
  const newGroupChall = new Groupchall({
    category: req.body.category,
    goal: req.body.goal
  });
  newGroupChall.save().then(groupchall => res.json(groupchall));
});

router.patch('/join/:groupchall_id', passport.authenticate("jwt", {session:false}), (req, res) => {
  User.findByIdAndUpdate({_id: req.user.id},
    { $push: {group_challenges: req.params.groupchall_id}}, 
    {new:true}).then(user =>{
      if (user){
        Groupchall.findByIdAndUpdate({_id: req.params.groupchall_id}, { $inc: {number_joined:1}},
        {new:true})
        .then(groupchall =>{ return res.json(groupchall)})
        .catch(err => res.status(404).json(err));
      }

    }).catch(err => res.status(404).json(err));

});

module.exports = router;
