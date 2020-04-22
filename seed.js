var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost:27017/cluster0', function () {

    // Load Mongoose models
    seeder.loadModels([
        './models/User.js',
        './models/Challenge.js'
    ]);

    // Clear specified collections
    seeder.clearModels(['User', 'Challenge'], function () {

        // Callback to populate DB once collections have been cleared
        seeder.populateModels(data, function () {
            seeder.disconnect();
        });

    });
});

// Data array containing seed data - documents organized by Model
var data = [
    {
        'model': 'User',
        'documents': [
            {
                username: "xxrogerxx",
                email: "roger@hotmail.com",
                password: "password",
                height: 68,
                weight: 180
            },
            {
                username: "sarah20",
                email: "sarah@gmail.com",
                password: "password",
                height: 63,
                weight: 135
            },
            {
                username: "mariee",
                email: "marie@aol.com",
                password: "password",
                height: 65,
                weight: 150
            },
            {
                username: "albert",
                email: "albert@yahoo.com",
                password: "password",
                height: 74,
                weight: 225
            },
            {
                username: "trevor",
                email: "trevor@hotmail.com",
                password: "password",
                height: 66,
                weight: 165
            },
            {
                username: "elizabeth",
                email: "elizabeth@gmail.com",
                password: "password",
                height: 60,
                weight: 120
            }
        ]
    },
    {
        'model': 'Challenge',
        'documents': [
            {
                category: "running",
                goal: "500",
                author_id: 1,
                challengee_id: 2,
                author_start_cals: 8734,
                challengee_start_cals: 1317
            },
            {
                category: "biking",
                goal: "800",
                author_id: 3,
                challengee_id: 4,
                author_start_cals: 888,
                challengee_start_cals: 4222
            },
            {
                category: "hiking",
                goal: "300",
                author_id: 5,
                challengee_id: 6,
                author_start_cals: 10980,
                challengee_start_cals: 100027
            }
        ]
    }
];