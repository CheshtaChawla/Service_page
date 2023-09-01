// Card.js
import React from 'react';
import './CreatePackage-Card.css';


const CreatePackageCard = ({ title, description, imageUrl, customBackground ,children}) => {
  // const background_color = customBackground? '#000000': '#ffffff';
  return (
  <div className="horizontalcard">
    <div className="createcard" >
      <img src={imageUrl} alt="Card" className="createcard-image"/>
      <div className="createcard-content">
        <h2 className="createcard-title">{title}</h2>
        <p className="createcard-description">{description}</p>
        {children}
        
        
      </div>
    </div>
  </div>
  );
};

export default CreatePackageCard;