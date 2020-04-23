import * as APIUtil from '../util/session_api_util';

export const RECIEVECHALLENGES = "RECIEVECHALLENGES";
export const RECIEVECHALLENGE = "RECIEVECHALLENGE";

const receiveChallenges =(challenges)=>{
  return({
    type: RECIEVECHALLENGES,
    challenges
  })
}

const receiveChallenge =(challenge)=>{
  return({
    type: RECIEVECHALLENGE,
    challenge
  })
}

export const createChallenge = (challengeData) => dispatch =>{
  return(
    APIUtil.createChallenge(challengeData).then(challenge => {dispatch(receiveChallenge(challenge))})
  )
}
export const authoredChallenges = (currentuser) => dispatch =>{
  return (
    APIUtil.authoredChallenges(currentuser).then(challenges =>{ dispatch(receiveChallenges(challenges))})
  );
};

export const invitedChallenges = (currentuser) => dispatch =>{
  return (
    APIUtil.invitedChallenges(currentuser).then(challenges =>{ dispatch(receiveChallenges(challenges))})
  );
};

export const requestChallenges = (currentuser) => dispatch =>{
  return (
    APIUtil.challenges(currentuser).then(challenges =>{ dispatch(receiveChallenges(challenges))})
  );
};
export const acceptChallenge = (challengeData) => dispatch =>{
  return (
    APIUtil.acceptChallenge(challengeData).then(challenge =>{ dispatch(receiveChallenge(challenge))})
  );
};

export const requestAll = () => dispatch =>{
  return (
    APIUtil.allchallenges().then(challenges =>{ dispatch(receiveChallenges(challenges))})
  );
};
