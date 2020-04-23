const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateChallengeInput(data) {
  let errors = {};
  data.category = validText(data.category) ? data.category : "";
  data.goal = validText(data.goal) ? data.goal : "";
  data.goal2 = validText(data.goal2) ? data.goal2 : "";
  // data.author_id = validText(data.author_id) ? data.author_id : "";
  data.challengee_id = validText(data.challengee_id) ? data.challengee_id : "";
  // data.author_start_cals = validText(data.author_start_cals) ? data.author_start_cals : "";
  //data.challengee_start_cals = validText(data.challengee_start_cals) ? data.challengee_start_cals : "";
  // data.creation = validText(data.creation) ? data.creation : "";
 // data.start = validText(data.start) ? data.start : "";

  if (Validator.isEmpty(data.category)){
    errors.category = "Category is required";
  }
  if (Validator.isEmpty(data.goal)){
    errors.goal = "Goal is required";
  }
  if (!Validator.isNumeric(data.goal)){
    errors.goal = "Goal must be number";
  }
  if (Validator.isEmpty(data.goal2)){
    errors.goal = "Goal verification is required";
  }
  if (!Validator.isNumeric(data.goal2)){
    errors.goal = "Goal must be number";
  }
  if (!Validator.equals(data.goal, data.goal2)) {
    errors.password2 = "Goals must match";
  }
  // if (Validator.isEmpty(data.author_id)){
  //   errors.author_id = "No author given";
  // }
  if (Validator.isEmpty(data.challengee_id)){
    errors.challengee_id = "You have not challenged anyone";
  }
  // if (!Validator.isNumeric(data.author_start_cals)){
  //   errors.author_start_cals = "Author's start cals must be a number";
  // }
  // if (Validator.isEmpty(data.author_start_cals)){
  //   errors.author_start_cals = "No start cal given for author";
  // }
    //need to validate the challengee's start cals?


  // if (Validator.isEmpty(data.creation)){
  //   errors.creation = "No start date";
  // }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };

};