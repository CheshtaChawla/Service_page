import React from "react";
import PackageCard from "./Package-Card";
import "./Package-List.css";
import "../../Style.css";


// import custompackageImage from '../../srcphotos/custompackage.png'; 
import custompackageImage1 from '../../srcphotos/custompackage1.png'; 
import prebridalImage from '../../srcphotos/prebridal.png'; 
// import BookPackageCardList from './BookPackage-List';

const cardData =[
    {packagename:"Pre-Bridal", packagecategory:"CLASSIC",price:"₹7000/-", mrp:"₹10,000/-", descriptionduration:["Number of seating: 2","Duration of service: 02 hours"] , descriptionservices:["Threading","Hair Spa (loreal/Matrix)","Hair wash + blow dry (Complimentry)","D-Tan/Bleach","Full Body Wax (Chocolate)"], imageUrl:prebridalImage},
    {packagename:"Pre-Bridal", packagecategory:"CLASSIC",price:"₹7000/-", mrp:"₹10,000/-", descriptionduration:["Number of seating: 2","Duration of service: 02 hours"] , descriptionservices:["Threading","Hair Spa (loreal/Matrix)","Hair wash + blow dry (Complimentry)","D-Tan/Bleach","Full Body Wax (Chocolate)"], imageUrl:prebridalImage},
    {packagename:"Pre-Bridal", packagecategory:"CLASSIC",price:"₹7000/-", mrp:"₹10,000/-", descriptionduration:["Number of seating: 2","Duration of service: 02 hours"] , descriptionservices:["Threading","Hair Spa (loreal/Matrix)","Hair wash + blow dry (Complimentry)","D-Tan/Bleach","Full Body Wax (Chocolate)"], imageUrl:prebridalImage},
    {packagename:"Pre-Bridal", packagecategory:"CLASSIC",price:"₹7000/-", mrp:"₹10,000/-", descriptionduration:["Number of seating: 2","Duration of service: 02 hours"] , descriptionservices:["Threading","Hair Spa (loreal/Matrix)","Hair wash + blow dry (Complimentry)","D-Tan/Bleach","Full Body Wax (Chocolate)"], imageUrl:prebridalImage},
    {packagename:"Pre-Bridal", packagecategory:"CLASSIC",price:"₹7000/-", mrp:"₹10,000/-", descriptionduration:["Number of seating: 2","Duration of service: 02 hours"] , descriptionservices:["Threading","Hair Spa (loreal/Matrix)","Hair wash + blow dry (Complimentry)","D-Tan/Bleach","Full Body Wax (Chocolate)"], imageUrl:prebridalImage},
];
const PackageList =() =>{
 return (  

    <div className="card-container-wrapper">
    <div className="card-list">
        {/* This is custom package card */}
        <PackageCard className='card1'
        title="CUSTOM PACKAGE"
        description="CREATE YOUR OWN PACKAGE BY CHOOSING SERVICES"
        imageUrl ={custompackageImage1} customSize={false}  > 
        <button className='custombutton'> CREATE </button>
        </PackageCard>
        {/* This is the packages list */}
        {cardData.map((data,index)=> <div>
        <PackageCard className='card4'
        key={index}
        title= <div className="titleRow">
            <div>
            <div className="name">{data.packagename}</div>
            <div className="category">{data.packagecategory}</div>
            </div>
            <div className="price">{data.price}</div>
            <div className="mrp">{data.mrp}</div>
            </div>
        
        description=<div className="description">
        <div className="descriptionduration">
            {data.descriptionduration.map((duration, index) => (
              <div key={index}>{duration}</div>
            ))}
          </div>
          <div className="descriptionservices">
            {data.descriptionservices.map((service, index) => (
              <div key={index}>{service}</div>
            ))}
          </div>
        {/* <div className="descriptionduration">{data.descriptionduration}</div>
        <div className="descriptionservices">{data.descriptionservices}</div> */}
        </div>
        imageUrl={prebridalImage}  customSize={true}>
        <div className="combinebutton">
        <button className='viewbutton'><u>VIEW DETAILS</u></button>
        <button className='bookbutton'>BOOK</button>
        </div>
        </PackageCard>
     
      
        </div>)}
        
        
        {/* <BookPackageCardList /> */}
        
       
        
        {/* <div>
         <PackageCard className='card2' 
          title="Card 2"
          description="This is the content of Card 2."
          imageUrl={prebridalImage}  customSize={true}>
          <button className='viewbutton'>VIEW DETAILS</button>
          <button className='bookbutton'>BOOK</button>
        </PackageCard>
        </div>

        <div>
        <PackageCard className='card3'
        title="Card 3"
        description="This is the content of Card 3."
        imageUrl={prebridalImage}  customSize={true}>
        <button className='viewbutton'>VIEW DETAILS</button>
        <button className='bookbutton'>BOOK</button>
        </PackageCard>
     
      
        </div> */}
    </div>
    </div>
    );
};

 export default PackageList;