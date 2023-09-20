import React from 'react';
import Service from './pages/service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

// import { Modals } from './components/pop_ups/Modal';

const PopupContent = ({ onClose }) => {
  return (
    <div className="popup-content">
      {/* <h1 style={{ color: 'black' }}>Welcome to my pop up</h1> */}
      <div style={{ color: 'black', display: 'flex', flexDirection: 'column', width: '100%' }}>
        <div style={{ backgroundColor: '#440BB7', position:'absolute', top:'0', width:'100%'  }}>
          <h1 style={{textAlign:'left' , display:'inline-block', padding:'5px'}}>Custom Packages</h1>
          <select style={{float:'right'}}>
            <option disabled autoFocus>Select Category</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div style={{marginTop:'80px'}}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" id="threading" name="threading" value="Threading" />
            <label style={{ textAlign: 'left', flex: 1 }} htmlFor="threading">Threading</label>
            <label style={{ textAlign: 'right' }}>₹423</label>
          </div>
          {/* Repeat the same structure for other checkboxes */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" id="hair-spa" name="hair-spa" value="Hair Spa (Loreal/Matrix)" />
            <label style={{ textAlign: 'left', flex: 1 }} htmlFor="hair-spa">Hair Spa (Loreal/Matrix)</label>
            <label style={{ textAlign: 'right' }}>₹423</label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" id="head-wash-blow-dry" name="head-wash-blow-dry" value="Head Wash + Blow dry (Complimentary)" />
            <label style={{ textAlign: 'left', flex: 1 }} htmlFor="head-wash-blow-dry">Head Wash + Blow dry (Complimentary)</label>
            <label style={{ textAlign: 'right' }}>₹423</label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" id="head-wash-blow-dry" name="head-wash-blow-dry" value="Head Wash + Blow dry (Complimentary)" />
            <label style={{ textAlign: 'left', flex: 1 }} htmlFor="head-wash-blow-dry">Head Wash + Blow dry (Complimentary)</label>
            <label style={{ textAlign: 'right' }}>₹423</label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" id="head-wash-blow-dry" name="head-wash-blow-dry" value="Head Wash + Blow dry (Complimentary)" />
            <label style={{ textAlign: 'left', flex: 1 }} htmlFor="head-wash-blow-dry">Head Wash + Blow dry (Complimentary)</label>
            <label style={{ textAlign: 'right' }}>₹423</label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input type="checkbox" id="head-wash-blow-dry" name="head-wash-blow-dry" value="Head Wash + Blow dry (Complimentary)" />
            <label style={{ textAlign: 'left', flex: 1 }} htmlFor="head-wash-blow-dry">Head Wash + Blow dry (Complimentary)</label>
            <label style={{ textAlign: 'right' }}>₹423</label>
          </div>
          {/* Repeat the same structure for other checkboxes */}
        </div>
        <div style={{ backgroundColor: '#440BB7', position:'absolute', bottom:'0', width:'100%' }}>
          <h1 style={{textAlign:'left' , display:'inline-block', padding:'5px'}}>₹ 1,200</h1>
          <button style={{ backgroundColor: 'white', paddingTop: '5px', paddingBottom: '5px', paddingLeft: '15px', paddingRight: '15px', float:'right' }}>Book</button>
        </div>
      </div>
      {/* <Modals /> */}
      <button onClick={onClose} style={{position:'absolute', top:'-35px', right:'0', borderRadius:'100%', height:'28px', width:'28px', display:'flex', justifyContent:'center' , alignItems:'center'}}><FontAwesomeIcon icon={faXmark} size='lg'/></button>
    </div>
  );
};

export default PopupContent;
