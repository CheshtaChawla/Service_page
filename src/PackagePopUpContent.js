import React from "react";
import Service from "./pages/service";
import prebridalImage from "./srcphotos/prebridal.png";
import PackageCard from "./components/cards/Package-Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// import { Modals } from './components/pop_ups/Modal';

const PackagePopUpContent = ({ onClose, cardData, idxx }) => {
  console.log(idxx);
  return (
    <div className="package-popup-content" style={{overflowY:"scroll"}}>
      {/* <h1 style={{ color: 'black' }}>Welcome to my pop up</h1> */}
      <PackageCard
        className="card4"
        key="1"
        title=<div className="titleRow" style={{ marginTop: "0px" }}>
          <div style={{ marginTop: "0px" }}>
            <div className="name">{cardData[idxx].packagename}</div>
            <div className="category">{cardData[idxx].packagecategory}</div>
          </div>
          <div style={{ marginTop: "0px" }}>
            <div className="price">{cardData[idxx].price}</div>
            <div className="mrp">{cardData[idxx].mrp}</div>
          </div>
        </div>
        description=<div className="description">
          <div className="descriptionduration">
            {cardData[idxx].descriptionduration.map((duration, index) => (
              <div key={index}>{duration}</div>
            ))}
          </div>
          <div className="descriptionservices">
            {cardData[idxx].descriptionservices.map((service, index) => (
              <div key={index}>{service}</div>
            ))}
          </div>
        </div>
        imageUrl={prebridalImage}
        customSize={true}
      >
        {/* <div className="combinebutton">
        <button className='viewbutton'><u>VIEW DETAILS</u></button> 
        <button className='bookbutton' onClick={toggleModal}>BOOK</button>
        </div> */}
      </PackageCard>
      {/* <Modals /> */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "-35px",
          right: "0",
          borderRadius: "100%",
          height: "28px",
          width: "28px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesomeIcon icon={faXmark} size="lg" />
      </button>
      <div
        style={{
          backgroundColor: "#440BB7",
          position: "absolute",
          bottom: "0",
          width: "100%",
        }}
      >
        <h1
          style={{ textAlign: "left", display: "inline-block", padding: "5px" }}
        >
          ₹ 1,200
        </h1>
        <button
          style={{
            backgroundColor: "white",
            paddingTop: "5px",
            paddingBottom: "5px",
            paddingLeft: "15px",
            paddingRight: "15px",
            float: "right",
          }}
        >
          Book
        </button>
      </div>
    </div>
  );
};

export default PackagePopUpContent;
