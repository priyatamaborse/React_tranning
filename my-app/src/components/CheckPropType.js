import React from 'react';
import PropTypes from 'prop-types'
import classes from './CheckPropsType.module.css';
import styled from 'styled-components'

const pStyle={
    color:'Blue'
}
const MyTag =styled.p`
font-size : 50px; `;

const ChechPropType = props=>{

   return(
        <>
        <p style ={{color:'red'}}>Inline style in element Us {props.name+" "+props.age}</p>
        <p style ={ pStyle }>Inline style with const {props.name+" "+props.age}</p>
        <p className={classes.pStyle}>css module import {props.name+" "+props.age}</p>
        <MyTag>Styled component css</MyTag>
        </>
    );
};


ChechPropType.propTypes ={
 name: PropTypes.string,
 age: PropTypes.number   
};
export default ChechPropType;