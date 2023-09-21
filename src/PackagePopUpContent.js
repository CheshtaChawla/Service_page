import React from "react";
import Service from "./pages/service";
import prebridalImage from "./srcphotos/prebridal.png";
import PackageCard from "./components/cards/Package-Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./components/cards/Package-Card.css";

// import { Modals } from './components/pop_ups/Modal';

const PackagePopUpContent = ({ onClose, cardData, idxx }) => {
  const imageUrl = cardData[idxx].imageUrl;
  const serviceDescriptionbyJs = cardData[idxx].descriptionservices;
  const descriptionbyJs = cardData[idxx].descriptionduration;
  // const imageUrl = cardData[idxx].imageUrl;
  return (
    <div className="packcardbyage-popup-content" style={{ overflow: "hidden" }}>
      <div className="cardbyjs">
        <img
          src={imageUrl}
          alt="Card"
          className="card-image"
          style={{ width: "100%", height: "150px", objectFit: "cover" }}
        />
        <div className="card-content" style={{ marginTop: "0px" }}>
          <h2 className="card-title">
            <div className="titleRow">
              <div>
                <div className="name">{cardData[idxx].packagename}</div>
                <div className="category">{cardData[idxx].packagecategory}</div>
              </div>
              <div>
                <div className="price">{cardData[idxx].price}</div>
                <div className="mrp">{cardData[idxx].mrp}</div>
              </div>
            </div>
          </h2>
          <p className="card-description">
            <div className="description">
              <div className="descriptionduration">
                <div>{descriptionbyJs}</div>
              </div>
              <div className="descriptionservices">
                {cardData[idxx].descriptionservices.map((service, index) => (
                  <div key={index}>{service}</div>
                ))}
                {cardData[idxx].descriptionservices.map((service, index) => (
                  <div key={index}>{service}</div>
                ))}
                {cardData[idxx].descriptionservices.map((service, index) => (
                  <div key={index}>{service}</div>
                ))}
              </div>
              {/* <div className="descriptionduration">{data.descriptionduration}</div>
        <div className="descriptionservices">{data.descriptionservices}</div> */}
            </div>
          </p>
          {/* {children} */}
        </div>
      </div>

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
          style={{
            textAlign: "left",
            display: "inline-block",
            padding: "5px",
          }}
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
