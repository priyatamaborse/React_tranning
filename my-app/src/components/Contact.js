import React from 'react';

const Contact= ()=>{
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

export default Contact;