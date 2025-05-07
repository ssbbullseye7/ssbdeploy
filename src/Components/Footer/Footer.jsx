import React from 'react'
import "./style.css"
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosGlobe } from "react-icons/io";
import { SiGooglemeet } from "react-icons/si";
import { BiLogoZoom } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import svglogo from "../../Primarygreen.svg";
import { FaLinkedinIn } from "react-icons/fa";
import tnc from "../../tnc.pdf";
import rnc from "../../rnc.pdf"
function Footer() {
  return (
    <div className='Footer'>
        <div className='footer-container'>
         <div className='logo-container'>
            
<svg width="98" height="100" viewBox="0 0 98 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M87.9265 53.6089H93.4219V46.3901H87.9265C86.2342 27.0468 71.1673 11.5833 52.279 9.84858V4.21533H45.2369V9.84858C26.3668 11.5833 11.2817 27.0281 9.58942 46.3901H4.09399V53.6089H9.58942C11.2817 72.9522 26.3486 88.4157 45.2369 90.1504V95.7837H52.279V90.1504C71.1491 88.4157 86.2342 72.9708 87.9265 53.6089ZM16.6862 53.6089H21.1626V46.3901H16.6862C18.3239 31.0199 30.2609 18.7835 45.2551 17.1047V21.6933H52.2972V17.1047C67.2913 18.7835 79.2284 31.0199 80.8661 46.3901H76.3897V53.6089H80.8661C79.2284 68.9791 67.2913 81.2155 52.2972 82.8943V78.3057H45.2551V82.8943C30.2609 81.2155 18.3239 68.9791 16.6862 53.6089Z" fill="#FFD329"/>
<path d="M7.04215 68.3643H0V100H30.8435V92.7812H7.04215V68.3643Z" fill="white"/>
<path d="M90.4928 92.7806H66.5641V99.9993H97.535V68.2144H90.4928V92.7806Z" fill="white"/>
<path d="M66.6727 0V7.21876H90.4923V31.6357H97.5344V0H66.6727Z" fill="white"/>
<path d="M7.04215 7.21876H30.8435V0H0V31.7103H7.04215V7.21876Z" fill="white"/>
<path d="M48.7675 72.0192C38.1769 72.0192 29.0785 63.9237 27.6228 53.1795L31.244 52.6572C32.4632 61.5548 39.9966 68.2699 48.7675 68.2699C57.5383 68.2699 65.0899 61.5548 66.2909 52.6572L69.9121 53.1795C68.4563 63.9237 59.358 72.0192 48.7675 72.0192Z" fill="#FFD329"/>
<path d="M48.7669 26.6189C36.1202 26.6189 25.8208 37.1766 25.8208 50.1405C25.8208 51.2411 25.8936 52.3416 26.0392 53.4235L26.4577 56.4453H71.0943L71.5129 53.4235C71.6585 52.3416 71.7312 51.241 71.7312 50.1592C71.7312 37.1952 61.4319 26.6375 48.7851 26.6375L48.7669 26.6189ZM48.7669 33.6325C53.862 33.6325 58.4112 36.076 61.3591 39.8813H36.1747C39.1226 36.076 43.6718 33.6325 48.7669 33.6325ZM32.681 49.4131C32.7174 48.555 32.8265 47.7156 32.9903 46.8949H64.5435C64.7073 47.7156 64.8165 48.555 64.8529 49.4131H32.681Z" fill="white"/>
</svg>
         {/* <img src={svglogo} alt="" width={200}/> */}
            {/* <div className='logo-quote'>Master Your SSB & NDA Exams!</div>
            <div className='logo-icon-container'>
                <div className='logo-icon'><a href="https://www.facebook.com/SSBBullsEye" target="_blank" rel="noopener noreferrer"><FaFacebookF style={{    color: "darkolivegreen"}}/></a></div>
                <div className='logo-icon'><a href="https://twitter.com/ssbbullseye" target="_blank" rel="noopener noreferrer"><FaTwitter style={{    color: "darkolivegreen"}}/></a></div>
                <div className='logo-icon'><a href="https://www.youtube.com/channel/UCd1VO9G4BzNXmKFNHTGkK4w" target="_blank" rel="noopener noreferrer"><FaYoutube style={{    color: "darkolivegreen"}}/></a></div>
                <div className='logo-icon'><a href="https://www.instagram.com/ssbbullseye/" target="_blank" rel="noopener noreferrer"><FaInstagram style={{    color: "darkolivegreen"}}/></a></div>
                <div className='logo-icon'><a href="https://www.linkedin.com/company/ssbbullseye/?viewAsMember=true" target="_blank" rel="noopener noreferrer"><FaLinkedinIn style={{    color: "darkolivegreen"}}/></a></div>
            </div> */}
           <div className='logo-icon-container'>
    <div className='logo-icon'>
      <a href="https://www.youtube.com/channel/UCd1VO9G4BzNXmKFNHTGkK4w" target="_blank" rel="noopener noreferrer">
        <FaYoutube style={{ color: "#FF0000" }} />  {/* YouTube Red */}
      </a>
    </div>
    <div className='logo-icon'>
      <a href="https://www.instagram.com/ssbbullseye/" target="_blank" rel="noopener noreferrer">
        <FaInstagram style={{ color: "#E1306C" }} />  {/* Instagram Pink */}
      </a>
    </div>
  </div>
         </div>
         {/* <div className='Contact-Us'>
            <div className='Contact-Us-header'>Policies</div>
            <div className='Contact-Us-content'>
            {/* We are always there to help you with your queries. Please feel free to contact us. */}
            {/* <div><a href={tnc} className='tnc' target="_blank" rel="noopener noreferrer">Terms and Conditions</a></div>
            <div><a href={rnc}  className='tnc' target="_blank" rel="noopener noreferrer">Refunds / Cancellations Policy</a></div> */}
            {/* <div> < MdEmail style={{height:"15px",width:"15px"}}/> support@ssbbullseye.com</div> */}
            {/* </div>
         </div>  */}
          
         <div className='Contact-Us'>
            <div className='Contact-Us-header'>Contact Us</div>
            <div className='Contact-Us-content'>
            {/* We are always there to help you with your queries. Please feel free to contact us. */}
            <div> <FaPhoneAlt style={{height:"15px",width:"15px"}}/> +(91) 97427 53113</div>
            <div> <IoLogoWhatsapp  style={{height:"15px",width:"15px"}}/> +(91) 83103 89908</div>
            <div> < MdEmail style={{height:"15px",width:"15px"}}/> ssbbullseye@gmail.com</div>
            <div> <IoIosGlobe style={{height:"15px",width:"15px"}}/> www.ssbbullseye.com</div>
            </div>
         </div>
         <div className='Contact-Us' >
            <div className='Contact-Us-header'>Online Mentoring Session</div>
            <div className='Contact-Us-content' style={{lineHeight:"20px"}}>
            The online mentoring sessions will be conducted On
            <div style={{display:"flex",alignItems:"center",gap:"10px"}}> <SiGooglemeet style={{height:"25px",width:"25px"}}/> Google Meet</div>
            <div style={{display:"flex",alignItems:"center",gap:"10px"}}> < BiLogoZoom  style={{height:"30px",width:"30px"}}/> Zoom</div>
    
            </div>
         </div>
        
        </div>
        <div className='copyright'>
            Copyright © 2019 - 2023 , ssbbullseye.com - All Rights Reserved.
          
        </div>
    </div>
  )
}

export default Footer