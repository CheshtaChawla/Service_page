// ClickableButtons.js
import React from 'react';
import './Clickable-Button.css';

const ClickableButtons = () => {
  const handleButtonClick = (buttonName) => {
    console.log(`Button "${buttonName}" clicked!`);
    // Add your custom logic here for handling the button click
  };

  return (
    <div className='clickbutton'>
      <button className='button' onClick={() => handleButtonClick('Button 1')}>Bride</button>
      <button className='button' onClick={() => handleButtonClick('Button 2')}>Groom</button>
      <button className='button' onClick={() => handleButtonClick('Button 3')}>Guest</button>
    </div>
  );
};

export default ClickableButtons;
