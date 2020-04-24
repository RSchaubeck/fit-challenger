import * as API from '../util/user_api_util';

export const GET_ALL_USERS = "GET_ALL_USERS";

const receiveAllUsers =(users)=>{
  return({
    type: GET_ALL_USERS,
    users
  });
};

export const requestUsers=()=>dispatch =>{
  return(
    API.fetchUsers().then(users =>{ dispatch(receiveAllUsers(users))})
  );
};