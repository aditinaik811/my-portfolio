import React from 'react';
import './Styling_Pages.css'
import { useNavigate } from 'react-router-dom';
const Contact = () => {

  const navigate = useNavigate();
    
      const handleContactClick = () => {
        navigate('/home');
      };
  return (
    <div id="contact_page">
      <h2 id="contact_page_heading">Contact Me</h2>
      <p id="contact_page_para">
        Feel free to reach out to me for collaborations or if you have any message for me.
      </p>
      <div id="contact_info">
        <p><strong>Email:</strong> aditinaik811@gmail.com</p>
        <p><strong>Phone:</strong> +91 8618106340</p>
        <p><strong>Location:</strong> Manglore India</p>
      </div>
      <div className="contact_page_social_info">
      </div>
      <div id="DM_form">
        <h3 id="contact_form">Contact Form:</h3>
        <form>
          <label className="sub_form">
            Name :
            <input type="text" className="sub_place" placeholder="Enter you name : " />
          </label>
          <br></br><br></br>
          <label className="sub_form">
            Email :
            <input type="email" className="sub_place" placeholder="Enter your email : " />
          </label>
          <br></br><br></br>
          <label className="sub_form">
            Message:
            <textarea className="sub_place" placeholder="Drop a message :" rows="10" ></textarea>
          </label>
          <br></br>
          <br></br>
          <button type="submit" id="submit_button">Submit</button>
        </form>
        <br></br><br></br>
        <button id="cm" onClick={handleContactClick}>Back to Home Page</button>
      </div>
    </div>
  );
};

export default Contact;