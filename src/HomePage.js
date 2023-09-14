import React, { useState } from 'react';
import Modal from 'react-modal';
import PopupContent from './PopupContent';

Modal.setAppElement('#root'); // Set the root element as the app element

const HomePage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="home-page">
      <h1 style={{color : 'black'}}>Welcome to My Website</h1>
      <button onClick={toggleModal}>Open Modal</button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        contentLabel="Popup Modal"
        className="popup-modal"
        overlayClassName="popup-overlay"
      >
        <PopupContent onClose={toggleModal} />
      </Modal>
    </div>
  );
};

export default HomePage;
