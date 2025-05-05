import React from 'react';
import './Styling_Pages.css'
const Contact = () => {
  return (
    <div className="contact_page">
      <h2 className="contact_page_heading">Contact Me</h2>
      <p className="contact_page_para">
        Feel free to reach out to me for collaborations or if you have any message for me.
      </p>
      <div id="contact_info">
        <p><strong>Email:</strong> name.email@example.com</p>
        <p><strong>Phone:</strong> +1234567890</p>
        <p><strong>Location:</strong> City, Country</p>
      </div>
      <div className="contact_page_social_info">
        <h3 className="social_media_info">Find me on Social Media:</h3>
        <ul className="list_of_social_links">
          <li><a href="#" className="socail_media">GitHub</a></li>
          <li><a href="#" className="social_media">LinkedIn</a></li>
          <li><a href="#" className="social_media">Portfolio</a></li>
        </ul>
      </div>
      <div id="DM_me_form">
        <h3 id="cpntact_form">Contact Form:</h3>
        <form>
          <label className="sub_form">
            Name
            <input type="text" className="sub_place" placeholder="Your Name" />
          </label>
          <label className="sub_form">
            Email:
            <input type="email" className="sub_place" placeholder="Your Email" />
          </label>
          <label className="sub_form">
            Message:
            <textarea className="sub_place" placeholder="Your Message" rows="4"></textarea>
          </label>
          <button type="submit" id="submit_button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;