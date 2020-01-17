import React from 'react'

const FunctionAsProps = props =>{
    const newarr=["newName",12];
    return(
       
        <div>
            
        <button onClick={()=>props.FunctionAsProps(newarr)}> Change Name By Function</button>
        </div>
    );
};

export default FunctionAsProps;