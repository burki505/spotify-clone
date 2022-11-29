import React from 'react';
import "./Button.css";

const Button = ({type,onClick = () => {},children,className}) => {

    const onClickHandler = () => {
        onClick();
    }

  return (
    <button className={`button ${className}`} type={type} onClick={onClickHandler}>{children}</button>
  )
}

export default Button