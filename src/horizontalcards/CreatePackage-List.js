import React from "react";
import "./CreatePackage-List.css";
import CreatePackageCard from "./CreatePackage-Card";
import freeconsultation from '../../src/srcphotos/freeconsultation.png'
import custompackageImage from '../../src/srcphotos/custompackage.png';
const cardData =[
    {title:"Custom Package", description:"Tailor your experience with personalized services. Say goodbye to unnecessary expenses and choose only the services that suit your needs. Enjoy the freedom to pay for exactly what you want, ensuring a truly customized and cost-effective solution for your beauty needs.", imageUrl: custompackageImage},
    {title:"Free Consultation", description:"Tailor your experience with personalized services. Say goodbye to unnecessary expenses and choose only the services that suit your needs. Enjoy the freedom to pay for exactly what you want, ensuring a truly customized and cost-effective solution for your beauty needs.", imageUrl:freeconsultation},
   
];
const CreatePackageList =() =>{
return(
  <div className="createcard-container-wrapper">
    <div className="createcard-list">
      {/* This is the packages list */}
      {cardData.map((data, index) => <div>
        <CreatePackageCard className='createpackage'
          key={index}
          title=<div className="createtitleRow">{data.title}</div>
          description=<div className="createdescription">{data.description}</div>
          imageUrl={custompackageImage}>
          <div>
            <button className='createbutton'><u>Create</u></button>
          </div>
        </CreatePackageCard>
      </div>)}
    </div>
  </div>
);
};


 export default CreatePackageList;