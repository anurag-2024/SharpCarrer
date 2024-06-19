import React, { useState } from "react";
import "./styles/Contact.css";
import { FaMapMarkerAlt, FaTwitter, FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';
import location from '../../public/images/location.png'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    msg: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <>
      <div className="contact_container">
        <div className="contact_left">
          <div className="contact_location">
           <img src={location} alt="" />
          </div>
          <div className="contact_left_text">
            <div className="contact_logo">
               <img src={location} alt="" />
            </div>
            <div className="texts">
                <div className="header">
                    <h1>SharpSkill</h1>
                </div>
                <div className="social_media">
                    <a href=""><FaTwitter size={30} /></a>
                    <a href=""><FaYoutube size={30} /></a>
                    <a href=""><FaFacebook size={30} /></a>
                    <a href=""><FaInstagram size={30} /></a>
                </div>
            </div>
          </div>
        </div>
        <div className="contact_right">
            <div className="contact_form">
              <form>
                <input 
                  type="text" 
                  placeholder="Your name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                />
                <input 
                  type="text" 
                  placeholder="Email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                />
                <textarea 
                  name="msg" 
                  placeholder="Enquiry" 
                  value={formData.msg} 
                  onChange={handleChange} 
                />
                <button type="submit">Submit</button>
              </form>
            </div>
            <div className="location_info">
                <h1>CONTACT-</h1>
                <p>123 Street, New Delhi, India</p>
                <p>+91 9798000239</p>
                <p>priyanshuraj2552@gmail.com</p>
            </div>
        </div>
     </div>
    </>
  );
};

export default Contact;
