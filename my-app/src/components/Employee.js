import React from 'react';


class Employee extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={
            userData:[]
        };
    }

    componentDidMount(){
        fetch("http://dummy.restapiexample.com/api/v1/employees")
        .then(response=>response.json())
        .then(data=>this.setState({userData:data}));
    }

    shouldComponentUpdate()
    {
        return true;
    }

    UNSAFE_componentWillUpdate(){
        console.log("ComponentWillUpdate");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    
    

    render()
    {
        return(

            <>
             <table style ={{width : "100%" , border : "1px solid #CCC"}} >
             <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {this.state.userData.map((item, i) => (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.employee_name}</td>
                <td>{item.employee_salary}</td>
              </tr>
            ))}
          </tbody>
            </table>
          
            </>

           
        );
    }
}

export default Employee;