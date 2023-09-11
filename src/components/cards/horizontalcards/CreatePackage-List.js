  import React, { useState } from 'react';
  import styled from 'styled-components';
  import { Modal } from '../../pop_ups/modal';
  // import { GlobalStyle } from './globalStyles';
  import "./CreatePackage-List.css";
  import CreatePackageCard from "./CreatePackage-Card";
  import freeconsultation from '../../../srcphotos/freeconsultation.png'
  import custompackageImage from '../../../srcphotos/custompackage.png';
  const cardData1 =[
      {title:"Custom Package", description:"Tailor your experience with personalized services. Say goodbye to unnecessary expenses and choose only the services that suit your needs. Enjoy the freedom to pay for exactly what you want, ensuring a truly customized and cost-effective solution for your beauty needs.", imageUrl: custompackageImage},
      // {title:"Free Consultation", description:"Tailor your experience with personalized services. Say goodbye to unnecessary expenses and choose only the services that suit your needs. Enjoy the freedom to pay for exactly what you want, ensuring a truly customized and cost-effective solution for your beauty needs.", imageUrl:freeconsultation},
    
  ];
  const cardData2 =[
    {title:"Free Consultation", description:"Tailor your experience with personalized services. Say goodbye to unnecessary expenses and choose only the services that suit your needs. Enjoy the freedom to pay for exactly what you want, ensuring a truly customized and cost-effective solution for your beauty needs.", imageUrl:freeconsultation},
    
  ];

  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `;

  const Button = styled.button`
    min-width: 100px;
    cursor: pointer;
      margin-left: 10px;
    /* width: 5rem;
    height: 2rem; */
    font-weight: 500;
    font-size: 1.3rem;
    color: #982372;
    /* text-decoration: none !important; */
    padding: 10px 40px;
    border-radius: 10px;
    border: none;
  `;

  const CreatePackageList =() =>{
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(showModal => !showModal);
    };
  return(
    <div className="createcard-container-wrapper">
      <div className="createcard-list">
        {/* This is the packages list */}
        {cardData1.map((data, index) => <div>
          <CreatePackageCard className='createpackage1'
            key={index}
            title=<div className="createtitleRow">{data.title}</div>
            description=<div className="createdescription">{data.description}</div>
            imageUrl={custompackageImage}>
            <div>
            <Button onClick={Modal}>Create</Button>
            <Modal showModal={showModal} setShowModal={setShowModal} />
            {/* <GlobalStyle /> */}
            </div>
          </CreatePackageCard>
        </div>)}

        {cardData2.map((data, index) => <div>
          <CreatePackageCard className='createpackage2'
            key={index}
            title=<div className="createtitleRow">{data.title}</div>
            description=<div className="createdescription">{data.description}</div>
            imageUrl={custompackageImage}>
            <div>
              <button className='createbutton'>CALL NOW</button>
            </div>
          </CreatePackageCard>
        </div>)}

      </div>
    </div>
  );
  };


  export default CreatePackageList;