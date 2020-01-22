import React from 'react';
import Button from './Button.jsx';

const ButtonPad = ({ handleClick }) => {
  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
  <div className="button-pad">
     <h1>Play!</h1>

    <div className="buttons">
      {buttons.map(numPin => (
        <Button numPin={numPin} handleClick={handleClick} />
      ))}
    </div>
  </div>
  )
}

export default ButtonPad;