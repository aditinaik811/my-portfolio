import React from 'react';
import './Styling_Pages.css';
import arn_img from '../Photos/arn_img.jpg';
import instagram from '../Photos/instagram.png';
import facebook from '../Photos/facebook.png';
import github from '../Photos/github.png';
import linkedin from '../Photos/linkedin.png';
import twitter from '../Photos/twitter.png';
import { useNavigate } from 'react-router-dom';





const Home = () => {

    const navigate = useNavigate();
  
    const handleContactClick = () => {
      navigate('/contact');
    };
  return (
    <div id="home">
  <div className="home-container">
  <img src={arn_img} alt="Aditi Naik" id="profile_photo" />
  
  <div id="home_details">
    <h1>Hii, I am Aditi Naik</h1>
    <h3>Computer Science Undergrad</h3>
    <p>"I believe that learning is a lifelong journey, not a destination. The Journey of Learning is Never Complete."</p>
  </div>
</div>
  <div id="social_media_links">
    <h3 id="sma">Social Media Accounts</h3>
    <ul>
      <li>Instagram<img src={instagram} alt="instagram" height="50px" className='l' /></li>
      <li>Facebook<img src={facebook} alt="instagram" height="50px"className='l'/></li>
      <li>GitHub <img src={github} alt="instagram" height="50px" className='l'/></li>
      <li>LinkedIn <img src={linkedin} alt="instagram" height="50px" className='l'/></li>
      <li>Twitter <img src={twitter} alt="instagram" height="50px" className='l'/></li>
      
    </ul>
    <button id="cm" onClick={handleContactClick}>Contact Me</button>
  </div>
  </div>
    
  );
};

export default Home;