import React from 'react';
  
 
const Button = props => {
    return (
        <div className="button-div">
            <button onClick={props.handleOnClick}>Click to reload!</button>
        </div>
    );
}

export default Button;