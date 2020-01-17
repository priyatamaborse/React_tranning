import React from 'react';

const Update= ()=>{
    const contactList = ["user1", "user2", "user3"];
    return (
      <ul>
        {
            contactList.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
 };

export default Update;