import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id:'u1', 
      image:'https://images.unsplash.com/photo-1692071097529-320eb2b32292?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
      name:'Aroh Elochukwu',
      places: 1,
      
  }
  ]


  return ( 
    <UsersList items={USERS}/>
   );
}
 
export default Users;