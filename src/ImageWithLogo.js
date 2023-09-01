import React from 'react';
import './ImageWithLogo.css'; // You'll create this CSS file in the next step

const ImageWithLogo = () => {
  return (
    <div className="image-with-logo-container">
      {/* <div>
      <img src="/photos/HeroSection.png" alt="Background" className="background-image" />
      </div> */}
      <div>
      <img src="/photos/GrooBe_logo.svg" alt="Logo" className="floating-logo" />
      </div>
    </div>
  );
};

export default ImageWithLogo;
