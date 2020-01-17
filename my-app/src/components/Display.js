import React ,{ Component }  from 'react';
import {Link} from 'react-router-dom';


class Display extends Component{
 
    constructor(props){
        super(props)
        this.state={
            person :[
                {
                 name:"Priya",
                 skill:"Java",
                 company:"Yash"
                },
                {
                    name:"Megha",
                    skill:"J2EE",
                    company:"Yash"
                },
                {
                    name:"Divya",
                    skill:"React",
                    company:"Yash"
                }
            ]
        }
      
    }
    
    render(){

   
    return (
                <>
            <table >
            <thead>
                <tr>
                    <th>name</th>
                    <th>skill</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                
                    <tr>
                        <td>Priya</td>
                        <td>Java</td>
                        <td>Yash</td>
                       <td><button >Update</button></td>
                        <td><button >Delete</button></td>
                    </tr>

                    <tr>
                        <td>Megha</td>
                        <td>J2EE</td>
                        <td>Yash</td>
                        <td><button >Update</button></td>
                        <td><button >Delete</button></td>
                    </tr>

                    <tr>
                        <td>Divya</td>
                        <td>React</td>
                        <td>Yash</td>
                        <td><button >Update</button></td>
                        <td><button >Delete</button></td>
                    </tr>
                
            </tbody>
            
            </table>
            <ul>
                <li> 
                    <Link to="/add">Add</Link>
                </li>
             
                
            </ul>
            </>
            );
    }
 };

export default Display;