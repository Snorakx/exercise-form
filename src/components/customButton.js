import React from 'react';

let CustomButton = (props) => {
  return (
    <button
      className="primary-btn"
      onClick={props.handleClick}
      type={props.handleType}>
      {props.children}
    </button>
  );
};
export default CustomButton;
