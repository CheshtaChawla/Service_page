import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';
import ImageWithLogo from './ImageWithLogo';
import './Style.css';
import './BackgroundImage.css'
import Button from './Clickable-Button';
import PackageCardList from './components/cards/Package-List';
import CreatePackageList from './horizontalcards/CreatePackage-List';
import BackgroundHero from './BackgroundImage';
// import WebsiteFooter from '../src/WebsiteFooter'; 

function App() {


  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setViewportWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="app-container">
       {/* <HeroSection/> */}
       {/* <div> */}
       {/* Background image of the hero section */}
       {/* <img src= "srcphotos/heroimage.png" className="background-image"  alt="Background"  /> */}
       {/* </div> */}
      <BackgroundHero />

      {/* <div className='nav'>
      <ImageWithLogo />
      <div>
      {viewportWidth < 750 ? <NavbarMobile /> : <Navbar />}
      </div>
      </div> */}

      <div className="nav-and-logo">
        {viewportWidth < 750 ? <NavbarMobile /> : <Navbar />}
        <ImageWithLogo />
      </div>

      <section className='heading'>
       <h1>Choose your package</h1>
      </section>
      
      <section className='App'>
      <Button />
      </section>
  
      <PackageCardList />
      <CreatePackageList />
      {/* <WebsiteFooter /> */}
    </div>
    
   
  );
};

export default App;