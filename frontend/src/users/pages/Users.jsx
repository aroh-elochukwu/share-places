import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id:'n1', 
      image:'https://instagram.fyyc2-1.fna.fbcdn.net/v/t51.2885-19/344350533_793815718974052_7911706912859416420_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fyyc2-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=l-L4DjZPtroAX8Gjs1I&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDowDdvkqpUXZlBICjbsGo7o1910KzPVaul07SC7mSePA&oe=64F7E049&_nc_sid=ee9879',
      name:'Nwachinemeluifeoma',
      places: '4'
  }
  ]


  return ( 
    <UsersList items={USERS}/>
   );
}
 
export default Users;