const mongoose = require('mongoose');

// Define the LoginInfo Schema
const loginInfoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    usernamePlaceholder: {
        type: String,
        required: true
    },
    passwordPlaceholder: {
        type: String,
        required: true
    },
    loginButtonText: {
        type: String,
        required: true
    },
    forgotPasswordLink: {
        type: String,
        required: true
    }
});

// Create the LoginInfo model
const LoginInfo = mongoose.model('LoginInfo', loginInfoSchema);

module.exports = LoginInfo;
