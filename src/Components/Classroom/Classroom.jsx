import React, { useEffect } from 'react'
import "./style.css"
import im1 from "../../im5.webp";
import { SlMouse } from "react-icons/sl";
import { FaPlay } from "react-icons/fa";
function Classroom({setenroll,enroll}) {
    
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
    <div className='Classroom-container' style={{width:"100%",paddingTop:"34.5px",paddingBottom:"34.5px"}}>
        <div className='Image3-container'>
        <div className='Image3'>
            <img src={im1}  alt="" />
            
        </div>
        <div className='content3-container'>
            <div className='play-video'>
            <img src={im1}  alt="" />
            <div className='play-video-container'>
                <div className='play-video-contents'>
                    <div className='play-video-content1'>Play Video</div>
                    <div className='play-video-content2'>See how we teach our students</div>
                </div>
             
            </div>
            <div className='play-circle'>
            <FaPlay />
            <div className="yellow-circle1"></div>
        <div className="yellow-circle2"></div>
            </div>
            </div>
            <div className='content3-container-data'>
                <div className='content3-container-data-header'>Embarking on our linguistic journey</div>
                
                <div className='content3-container-para'>
                <p>Embarking on a linguistic journey, we delve into language education, guiding students through exploration and proficiency.
                    </p>
                <p>Our expert instructors use innovative methods, unraveling language nuances, fostering deep understanding, and empowering mastery.
                </p> 
                </div>
                <div className='enroll' style={{cursor:"pointer"}} onClick={()=>{setenroll(true); handleScrollTo('enroll');}}>Enroll now</div>
            </div>
        </div>
        </div>
       
        
    </div>
  )
}

export default Classroom