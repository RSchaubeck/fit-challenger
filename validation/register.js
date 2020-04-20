const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.username = validText(data.username) ? data.username : "";
    data.email = validText(data.email) ? data.email : "";
    data.password = validText(data.password) ? data.password : "";
    data.password2 = validText(data.password2) ? data.password2 : "";
    data.height = validText(data.height) ? data.height : "";
    data.weight = validText(data.weight) ? data.weight : "";
    data.calories_count = validText(data.calories_count) ? data.calories_count : "";
    data.accept_challenge = validText(data.accept_challenge) ? data.accept_challenge : "";


    if (!Validator.isLength(data.username, { min: 5, max: 25 })) {
        errors.username = "Username must be between 5 and 25 characters";
    }

    if (Validator.isEmpty(data.username)) {
        errors.username = "Username field is required";
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters";
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm Password field is required";
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Password must match";
    }

    if (Validator.isEmpty(data.height)) {
        errors.height = "Confirm height field is required";
    }

    if (Validator.isNumeric(data.height), { no_symbols: true }) {
        errors.height = "Please only enter numbers"
    }

    if (Validator.isEmpty(data.weight)) {
        errors.weight = "Confirm weight field is required";
    }

    if (Validator.isNumeric(data.weight), { no_symbols: true }) {
        errors.weight = "Please only enter numbers"
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};