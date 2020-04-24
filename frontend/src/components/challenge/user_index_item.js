import React from 'react';


const UserIndexItem = ({user}) =>{
  
  return (<option value= {user.id} > {user.username} </option>);
};

export default UserIndexItem;