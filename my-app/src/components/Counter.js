import React,{useState} from 'react';

const Counter = (props) =>{
    const[x,myFunction] = useState(props.initialValue);

    return (
        <div>
            <p> you clicked {x} times</p>
            <button onClick={()=> myFunction(x+1)}> Click me</button>

        </div>
    );
}

export default Counter;
