import React from "react";

const UserOutput = (props) => {
  return (
    <div>
      <p> Please enter your name: {props.username}</p>
    </div>
  );
};

export default UserOutput;
