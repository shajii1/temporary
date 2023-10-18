const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

// Define the allowed roles
const validRoles = ['admin', 'salesperson', 'owner'];

var User = new Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        enum: validRoles, // Ensure the role is one of the valid roles
        default: 'salesperson', // Set a default role
    },
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
