var User = require('../models/User');
var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://lbisch:PlINSj1Ahwadz06O@cluster0-xpszz.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

var users = [
    new User({
        username: "xxrogerxx",
        email: "roger@hotmail.com",
        password: "password",
        height: 68,
        weight: 180
    }),
    new User({
        username: "sarah20",
        email: "sarah@gmail.com",
        password: "password",
        height: 63,
        weight: 135
    }), 
    new User({
        username: "mariee",
        email: "marie@aol.com",
        password: "password",
        height: 65,
        weight: 150
    }), 
    new User({
        username: "trevor",
        email: "trevor@hotmail.com",
        password: "password",
        height: 66,
        weight: 165
    }),
    new User({
        username: "elizabeth",
        email: "elizabeth@gmail.com",
        password: "password",
        height: 60,
        weight: 120
    }),
    new User({
        username: "albert",
        email: "albert@yahoo.com",
        password: "password",
        height: 76,
        weight: 225
    }),
    new User({
        username: "demouser",
        email: "demo@gmail.com",
        password: "password",
        height:60,
        weight: 180
    })
];

var done = 0;
users.forEach(user => {
    user.save(function(err, result) {
        done++;
        if (done === users.length) {
            mongoose.disconnect();
        }
    });
});

