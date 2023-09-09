import './service.css';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import NavbarMobile from '../components/navbar/NavbarMobile';
import ImageWithLogo from '../components/service/ImageWithLogo';
import '../Style.css';
import '../components/service/BackgroundImage';
import Button from '../components/button/Clickable-Button';
import PackageCardList from '../components/cards/Package-List';
import CreatePackageList from '../components/cards/horizontalcards/CreatePackage-List';
import BackgroundHero from '../components/service/BackgroundImage';
// import WebsiteFooter from '../src/WebsiteFooter'; 

function Service() {


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
    <section>
      <BackgroundHero />
      {/* </section> */}
      {/* <div className='nav'>
      <ImageWithLogo />
      <div>
      {viewportWidth < 750 ? <NavbarMobile /> : <Navbar />}
      </div>
      </div> */}

      {/* <div className="nav-and-logo">
        {viewportWidth < 750 ? <NavbarMobile /> : <Navbar />}
        <ImageWithLogo />
      </div> */}

      <section className='heading'>
       <h1 >Choose your package</h1>
      {/* </section>
      
      <section className='App'> */}
      <Button />
      </section>
  
      <PackageCardList />
      </section>
      <section>
      <CreatePackageList />
      </section>
     
    </div>
    
   
  );
};

export default Service;