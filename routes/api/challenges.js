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
    //im not sure if we need to do searching for the person by their username here or in front end calcs
    challengee_id: req.body.challengee_id,
    author_start_cals: req.user.calories_count,
  });
  newChallenge.save().then(challenge => res.json(challenge));
});

router.get('/user/author/:author_id', (req, res) => {
  Challenge.find({author_id: req.params.author_id})
  .then(challenges => {
    if (challenges.length === 0){
      return res.json("You haven't Challenged anyone yet");
    }
    return res.json(challenges);
  })
    
    
  .catch(err => res.status(404).json(err));
  
});

router.get('/user/challengee/:challengee_id', (req, res) => {
  Challenge.find({challengee_id: req.params.challengee_id})
  .then(challenges => res.json(challenges))
  .catch(err => res.status(404).json(err));
  
});

// router.get('/user/challenges/', passport.authenticate("jwt", { session: false }), (req, res) =>{
//   Challenge.find( { $or: [ {challengee_id: req.user.id}, {author_id: req.user.id } ] } )
//   .then(challenges => {
//     if (challenges.length === 0){
//       return res.json("You have no challenges");
//     }
//     return res.json(challenges);
//   });

// });

router.get('/user/acceptc', (req, res) => {
  Challenge.find({challengee_id: req.user.id})
    .then(challenge =>{
    challenge.update(
    {challengee_start_cals: Date.now},
    {start: Date.now})
    return res.json("The challenge has begun!")})
    .catch(err => res.status(404).json(err));
  });

// router.get("/:id")


module.exports = router;