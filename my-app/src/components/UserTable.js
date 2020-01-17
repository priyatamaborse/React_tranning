import React from 'react';
import FunctionAsProps from './FunctionAsProps'
import EmployerList from "./EmployeeList";
import ReactDOM from "react-dom";
class UserTable extends React.Component
{
  
    constructor(props)
    {
        super(props);
        this.state={

            myData:[
                {
                    name:"divya",
                    skill:"springBoot",
                    company:"yash"
                },
                {
                    name:"priya",
                    skill:"spring",
                    company:"yash"
                },
                {
                    name:"megha",
                    skill:"springMVC",
                    company:"yash"
                }
                
            ],
            temp:"temporary",
            tempName:"temp2",
            age:10
        };
    }

    changeName(){

        this.setState({
           
            name: "changeName",
            myData:[
                {
                    name:"divya1",
                    skill:"springBoot",
                    company:"yash"
                },
                {
                    name:"priya1",
                    skill:"spring",
                    company:"yash"
                },
                {
                    name:"megha1",
                    skill:"springMVC",
                    company:"yash"
                }
                
            ]
        });

        
    }
    myChangeName= (arr)=>{
        this.setState({
        tempName:arr[0],
        age:arr[1]
    });
    }

    showEmployerList() {
        ReactDOM.render(<EmployerList />, document.getElementById("employerList"));
      }
      unmountComponent() {
        ReactDOM.unmountComponentAtNode(document.getElementById("employerList"));
      }

render(){
    return(
    <>
    <table style ={{width : "100%" , border : "1px solid #CCC"}}>
    <thead>
        <tr>
            <th>name</th>
            <th>skill</th>
            <th>Company</th>
        </tr>
    </thead>
    <tbody>
        {this.state.myData.map((item,i)=>(
            <tr key={i}>
                <td>{item.name}</td>
                <td>{item.skill}</td>
                <td>{item.company}</td>
            </tr>
        ))}
    </tbody>
    
    </table>

    <p>{this.state.temp}</p>
    <button onClick={()=>this.changeName()}> Change Name </button>
    <p>{this.state.tempName}</p>
    <p>{this.state.age}</p>
    <FunctionAsProps FunctionAsProps={this.myChangeName}/>

    <h2>ReactDom render example</h2>
        <button onClick={() => this.showEmployerList()}>
          Show Employer List
        </button>
        <div id="employerList"></div>
        <hr />
        <h2>Unmount component</h2>
        <button onClick={() => this.unmountComponent()}>
          Unmount Component
        </button>
    </>
    );

    
    }
}
export default UserTable;