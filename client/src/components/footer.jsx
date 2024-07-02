import React, { useState } from "react";
import "./styles/footer.scss";
import { FaMapMarkerAlt, FaTwitter, FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";
const Footer = () => {
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
  const handleClick = () => {
    window.scrollTo(0, 0, 'smooth');
  }
  return (
    <>
      <div className="contact_container">
        <div className="contact_left">
          <div className="contact_location">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448196.5263208281!2d76.76357549901144!3d28.643684629087268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1719219807534!5m2!1sen!2sin" width={450} height={370} style={{border:0}} allowfullscreen={""}></iframe>
          </div>
          <div className="contact_left_text">
            <div className="contact_logo">
               <Link to="/"><img src={logo} alt="" onClick={()=>handleClick()}/></Link>
            </div>
            <div className="texts">
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
                <h1>CONTACT:</h1>
                <div>
                <p>123 Street, New Delhi, India</p>
                <p>+91 9798xxxxxx</p>
                <p>SharpSkill@gmail.com</p>
                </div>
            </div>
        </div>
     </div>
    </>
  );
};

export default Footer;
