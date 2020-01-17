import React from 'react';
import {Link} from 'react-router-dom';

const Dashbord= ()=>{

    return (
      <ul>
        <li> 
            <Link to="/users">users</Link>
        </li>
        <li> 
            <Link to="/contact">contact</Link>
        </li>
        <li> 
            <Link to="/aboutus">about</Link>
        </li>
        )}
      </ul>
    );
 };

export default Dashbord;