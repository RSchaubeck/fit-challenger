import axios from 'axios';

export const createChallenge = (challengeData) => {
  return axios.post("/api/challenges/", challengeData );
};

export const authoredChallenges = (challenges) => {
  return axios.get("/api/challenges/user/author", challenges);
};

export const invitedChallenges = (userData) => {
  return axios.get("/api/challenges/user/challengee", userData);
};

export const challenges = (userData) => {
  return axios.get("/api/challenges/user/challenges", userData);
};

export const acceptChallenge = (challengeData) => {
  return axios.patch("/api/challenges/user/accept/:chall_id", challengeData);
};

export const allChallenges = () => {
  return axios.get("/api/challenges/all_challenges");
};
