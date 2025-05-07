import React, { useState } from "react";
import "./style.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import emailjs from 'emailjs-com'
import rect14 from "../../Rectangle 14.png"
import toast, { Toaster } from 'react-hot-toast';
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phoneNumber: '',
    hearAbout: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs.sendForm('service_n9wwfu1', 'template_7i6ggdh', e.target, process.env.REACT_APP_API_KEY_EMAILJS)
      .then((result) => {
    
        toast.success('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
          phoneNumber: '',
          question: '',
          hearAbout: ''
        });
      }) .catch((error) => {
        console.error(error.text);
        toast.error('Failed to send message. Please try again later.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <>
    <Toaster/>
    <div className="yellow-line"><svg width="328" height="350" viewBox="0 0 328 500" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M254.786 0H328L73.2143 500H0L254.786 0Z" fill="#FFD329"/>
</svg>
</div>
  <div className="background-contact"><img src={rect14} alt="" /></div>
    <div className="Contact-container"  id="contact">
   
      <div className="mobile-contact">
     
        <div className="Contact-form">
          <div className="form-container">
            <div className="form-header-container">
              <div className="form-header-title">
                Get in <span>Touch</span>
              </div>
              {/* <div className="hello" >
                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
                leo molestie vel, ornare non id blandit netus.
              </div> */}
            </div>
            <div >
                <form onSubmit={handleSubmit} className="form-input-container">
                <input type="text"  className="form-input star"           id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
placeholder="Name*" required/>
                <input type="text"  className="form-input"   id="email"
          name="email"
          value={formData.email}
          onChange={handleChange} placeholder="Email"/>
                <input type="text"  className="form-input star"    id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange} placeholder="Phone Number*" required/>
                <select id="select-dropdown" name="hearAbout"
          value={formData.hearAbout}
          onChange={handleChange} className="form-input">
                    <option value="0">How did you find us?</option>
                    <option value="Word of mouth">Word of mouth</option>
          <option value="Internet search">Internet search</option>
          <option value="Social media">Social media</option>
          <option value="Advertisement">Advertisement</option>
          <option value="Other">Other</option>
                </select>
                <input type="text"     id="message"
          name="message"
          value={formData.message}
          onChange={handleChange} className="form-input" placeholder="Question*"/>
                <input type="submit" value={isSubmitting ? "Sending..." : "Send"}/>
                </form>
            </div>
         
        </div>
      </div>
      </div>
     
    </div>
    </>
  );
}

export default Contact;
