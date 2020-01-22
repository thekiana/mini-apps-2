import React from 'react';

const Button = ({ numPin, handleClick }) => {

  return (
    <div>
      <button name={numPin} onClick={() => handleClick(numPin)}> {numPin} </button>
    </div>
  )
}

export default Button;