const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateChallengeInput = require("../../validation/challenges");
// router.get("/test", (req, res) => res.json({ msg: "This is the challenges route" }));
const Challenge = require("../../models/Challenge");


router.post("/",
  passport.authenticate("jwt", {session:false}),
  (req, res)=>{
    const {isValid, errors} = validateChallengeInput(req.body);

  if (!isValid){
    return res.status(400).json(errors);
  }
  const newChallenge = new Challenge({
    author_id: req.user.id,
    category: req.body.category,
    goal: req.body.goal,
    challengee_id: req.body.challengee_id,
    author_start_cals: req.user.calories_count
  });
  newChallenge.save().then(challenge => res.json(challenge));
});

router.get('/user/author', passport.authenticate("jwt", {session:false}), (req, res) => {
  Challenge.find({author_id: req.user.id})
  .then(challenges => {
    if (challenges.length === 0){
      return res.json("You haven't Challenged anyone yet");
    }
    return res.json(challenges);
  })
  .catch(err => res.status(404).json(err));
  
});

router.get('/user/challengee', passport.authenticate("jwt", {session:false}), (req, res) => {
  Challenge.find({challengee_id: req.user.id})
  .then(challenges => res.json(challenges))
  .catch(err => res.status(404).json(err));
});

router.get('/user/challenges', passport.authenticate("jwt", { session: false }), (req, res) =>{
  Challenge.find( { $or:[ {challengee_id: req.user.id}, {author_id: req.user.id } ] } )
  .then(challenges => {
    if (challenges.length === 0){
      return res.json("You have no challenges");
    }
    return res.json(challenges);
  });
});

router.patch('/user/accept/:chall_id', passport.authenticate("jwt", {session:false}), (req, res) => {
  const NewD = new Date();
  Challenge.findByIdAndUpdate({_id: req.params.chall_id},{
    challengee_start_cals: req.user.calories_count,
    startd: NewD},
    {new:true})
    .then(challenge =>{ return res.json(challenge)})
    .catch(err => res.status(404).json(err));
  });

router.get('/all_challenges', passport.authenticate("jwt", { session: false }), (req, res) =>{
  Challenge.find()
    .sort({ creation: -1})
    .then(challenges => res.json(challenges))
    .catch(err => res.status(404).json({err}));
// router.patch('/user/accept/:chall_id', passport.authenticate("jwt", {session:false}), (req, res) => {
//   Challenge.find({id: req.params.chall_id})
//     .then(challenge =>{
//     challenge.update(
//     {challengee_start_cals: Date.now},
//     {start: Date.now});
//     return res.json("The challenge has begun!");})
//     .catch(err => res.status(404).json(err));
//   });
});


module.exports = router;