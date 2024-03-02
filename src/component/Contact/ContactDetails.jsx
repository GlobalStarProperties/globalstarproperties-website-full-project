import React from 'react';
import { FaAddressCard, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Button from '../Utility/Button/Button';

const ContactDetails = ({onWhatsappClick}) => {
  const onClickBtn = () => {
    onWhatsappClick('contact');
  }

  return (
    <section className="contact-section">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-details">
          <div className="contact-item">
            <i className="icon"><FaAddressCard /></i> 
            <p>123 Main Street, City, State, Zip Code</p>
          </div>
          <div className="contact-item">
            <i className="icon"><FaPhone /></i>
            <p>+1-123-456-7890</p>
          </div>
          <Link href="https://wa.me/11234567890?text=Hello,%20I'd%20like%20to%20get%20in%20touch" 
             className="whatsapp-btn"
             target="_blank" 
             rel="noopener noreferrer">
                <Button text={'Contact us on WhatsApp'} icon={<FaWhatsapp />} iconColor={'green'} onClick={onClickBtn}/>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
