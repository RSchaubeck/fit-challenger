var Challenge = require('../models/Challenge');
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://lbisch:PlINSj1Ahwadz06O@cluster0-xpszz.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

var challenges = [
    new Challenge({
        category: "running",
        goal: "500",
        author_id: "5e9f403ddc161dc95472a36c",
        challengee_id: "5e9f1314fc0f54c213176e95",
        author_start_cals: 8734,
        challengee_start_cals: 1317
    }),
    new Challenge({
        category: "biking",
        goal: "800",
        author_id: "5ea04ab26de4f07ce4c53a5d",
        challengee_id: "5ea04ab26de4f07ce4c53a5c",
        author_start_cals: 888,
        challengee_start_cals: 4222
    }),
    new Challenge({
        category: "hiking",
        goal: "300",
        author_id: "5ea04ab26de4f07ce4c53a5f",
        challengee_id: "5ea04ab26de4f07ce4c53a5e",
        author_start_cals: 10980,
        challengee_start_cals: 100027
    }),
    new Challenge({
        category: "walking",
        goal: "300",
        author_id: "5ea04ab26de4f07ce4c53a61",
        challengee_id: "5ea04ab26de4f07ce4c53a60",
        author_start_cals: 10980,
        challengee_start_cals: 100027
    })
];

var done = 0;
challenges.forEach(challenge => {
    challenge.save(function (err, result) {
        done++;
        if (done === challenges.length) {
            mongoose.disconnect();
        }
    });
});

