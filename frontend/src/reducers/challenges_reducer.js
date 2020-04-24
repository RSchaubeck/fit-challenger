import {
  RECIEVECHALLENGES,
  RECIEVECHALLENGE
} from '../actions/challenge_actions';

export const challengesReducer = (state={}, action)=> {
  Object.freeze(state);
  switch(action.type){
    case RECIEVECHALLENGES:
      return (Object.assign({}, state, action.challenges));
    case RECIEVECHALLENGE:
      return (Object.assign({}, state, action.challenge));
    default:
      return state;
  }
};