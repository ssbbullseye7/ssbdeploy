import React, { useEffect, useState } from "react";
import "./style.css";
import { FaPlay } from "react-icons/fa6";
import im1 from "../../im1.jpg";
import im2 from "../../im2.jpg"
import im3 from "../../im3.jpg";
import vid from "../../ssbvid.mp4"
import Enroll from "../../Pages/Enroll";
import sol from "../../sol.png"
// const imagesArray = [im1, im3];
function Hero({setenroll,enroll }) {
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesArray.length);
  //   }, 4000);

  //   return () => clearInterval(interval);
  // }, []);
  const smoothScrollTo = (id, callback) => {
    // Check if the current route is /enroll
   
      // If the current route is already /home, scroll directly
      performScrollTo(id, callback);
     
   
  };

  const performScrollTo = (id, callback) => {
    const settings = {
      duration: 1000,
      easing: {
        outQuint: function (x, t, b, c, d) {
          return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        }
      }
    };

    const node = document.getElementById(id);
    const nodeTop = node.offsetTop-80;
    const nodeHeight = node.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowHeight = window.innerHeight;
    const offset = window.pageYOffset;
    const delta = nodeTop - offset;
    const bottomScrollableY = height - windowHeight;
    const targetY = bottomScrollableY < delta ? bottomScrollableY - (height - nodeTop - nodeHeight + offset) : delta;

    let startTime = Date.now();
    let percentage = 0;

    function step() {
      const elapsed = Date.now() - startTime;

      if (elapsed > settings.duration) {
        clearTimeout(timer);
      }

      percentage = elapsed / settings.duration;

      if (percentage > 1) {
        clearTimeout(timer);

        if (callback) {
          callback();
        }
      } else {
        const yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
        window.scrollTo(0, yScroll);
        timer = setTimeout(step, 10);
      }
    }

    let timer = setTimeout(step, 10);
  };

  useEffect(() => {
    // Optionally, you can handle initial scroll based on URL hash
    const hash = window.location.hash.substring(1);
    if (hash) {
      smoothScrollTo(hash);
    }
  
  }, []);

  const handleScrollTo = (targetId) => {
 setTimeout(()=>{
  smoothScrollTo(targetId);
 },100)
  
  };
  return (

    <div className="hero" id="home">
       <div className="svg-arrow" onClick={()=>{ handleScrollTo('about');}}>
<svg width="86" height="90" viewBox="0 0 86 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0L43 31.6623L86 0L86 20.6596L43 52.3219L0 20.6596V0ZM0 37.6781L43 69.3404L86 37.6781L86 58.3377L43 90L0 58.3377L0 37.6781Z" fill="#FFD329"/>
</svg>
</div>
      <div className="background">
      <img src={sol} alt="" />
      </div>
     
      <div className="Hero-header">
        <div className="Hero-header-content">
        YOUR BEST SHOT AT CRACKING <br/>SSB AND NDA
        </div>
        <div  className="en" onClick={()=>{setenroll(true); handleScrollTo('enroll');}}>Enroll now</div>
       
        </div>
      {/* <div className="Hero-video">
      <video width="100%" height="100%" controls>
              <source src={vid} type="video/mp4"/>
			</video>
      </div> */}
      {/* <div className="top">
        <div className="Hero-header-container">
          <div className="Hero-header">
            <div className="Hero-header-content">
              Master Your SSB & NDA Exams!
            </div>
          </div>
          <div className="Top-footer">
            Expert Coaching for Success in Defence Entrance Exams
          </div>
       
        </div>
        <div className="Image-container1">
        {imagesArray.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={`image test ${index === currentImageIndex ? "visible" : "hidden"}`}
          />
        ))}
        </div>
      </div>
      <div className="para-container">
            <p className="para">
              At SSB BullsEye, we excel in guiding candidates toward success in
              SSB & NDA exams. With experienced coaches and a proven track
              record, our tailored approach ensures comprehensive preparation.
              We equip you with skills and confidence needed to conquer these
              rigorous assessments.
            </p>
            <div className="get-container">
              <div className="getintouch">Get in touch</div>
              <div className="watch-container">
                <div className="watch-video">
                  <div className="play-icon">
                    <FaPlay />
                  </div>
                  <div>Watch Our Video</div>
                </div>
              </div>
            </div>
          </div>
      <div className="Image-container2">
        <img src={im2} alt="" className="image" />
      </div> */}
    </div>
  );
}

export default Hero;
