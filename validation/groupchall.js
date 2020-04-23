const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function ValidateGroupChallInput(data) {
  let errors = {};
  data.category = validText(data.category) ? data.category : "";
  data.goal = validText(data.goal) ? data.goal : "";
  
  if (Validator.isEmpty(data.category)){
    errors.category = "Category is required";
  }
  if (Validator.isEmpty(data.goal)){
    errors.goal = "Goal is required";
  }
  if (!Validator.isNumeric(data.goal)){
    errors.goal = "Goal must be number";
  }
  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };

};

