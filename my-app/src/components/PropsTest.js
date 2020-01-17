import React from 'react'

class PropsTest extends React.Component{

    constructor(props)
    {
        super(props);
        this.props=props;
    }

render(){
    const{data, name}=this.props;
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
        {data.myData.map((item,i)=>(
            <tr key={i}>
                <td>{item.name}</td>
                <td>{item.skill}</td>
                <td>{item.company}</td>
            </tr>
        ))}
    </tbody>
    </table>
    {name}
    </>
    );


    }
}
export default PropsTest;
