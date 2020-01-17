import React from 'react';

const Users= ()=>{
    const userList = ["user1", "user2", "user3"];
    return (
      <ul>
        {
            userList.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
 };

export default Users;