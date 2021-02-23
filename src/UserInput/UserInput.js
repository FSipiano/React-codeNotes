import React from "react";
import './UserInput.css';
const userInput = (props) => {

  return <input
    className='userInput'
    type="text"
    onChange={props.changedName}
    value = {props.currentName}
    />;
};

export default userInput;
