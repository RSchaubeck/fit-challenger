import React from 'react';


const UserIndexItem = (props) =>{
  return (<option value= {props.user.id} > {props.user.username} </option>);
  
};

export default UserIndexItem;