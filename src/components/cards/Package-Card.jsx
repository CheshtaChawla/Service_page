// Card.js
import React from 'react';
import './Package-Card.css';

const PackageCard = ({ title, description, imageUrl, customSize, customBackground ,children}) => {
  const imageHeight= customSize? '200px': '350px';
  // const background_color = customBackground? '#000000': '#ffffff';
  return (
    <div className="card" >
      <img src={imageUrl} alt="Card" className="card-image" style={{ width: '100%', height: imageHeight }} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        {children}
        
        
      </div>
    </div>

  );
};

export default PackageCard;