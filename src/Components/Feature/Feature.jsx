import React, { useEffect, useState } from "react";
import "./style.css";
import { FaArrowRightLong } from "react-icons/fa6";
import im1 from "../../im1.jpg";
import im2 from "../../im2.jpg";
import im3 from "../../im3.jpg";
import im11 from "../../im11.png";
import feat from "../../Rectangle 1722.png";
import feat1 from "../../Rectangle 1723.png";
import feat2 from "../../Rectangle 1724.png";
import feat3 from "../../Rectangle 1725.png";
function Feature({ setenroll, enroll }) {
  //   const [act,setact]=useState(true);
  //   const [act1,setact1]=useState(true);
  //   const [act2,setact2]=useState(true);
  //   const [act3,setact3]=useState(true);
  //   const smoothScrollTo = (id, callback) => {
  //     // Check if the current route is /enroll

  //       // If the current route is already /home, scroll directly
  //       performScrollTo(id, callback);

  //   };

  //   const performScrollTo = (id, callback) => {
  //     const settings = {
  //       duration: 1000,
  //       easing: {
  //         outQuint: function (x, t, b, c, d) {
  //           return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  //         }
  //       }
  //     };

  //     const node = document.getElementById(id);
  //     const nodeTop = node.offsetTop-80;
  //     const nodeHeight = node.offsetHeight;
  //     const body = document.body;
  //     const html = document.documentElement;
  //     const height = Math.max(
  //       body.scrollHeight,
  //       body.offsetHeight,
  //       html.clientHeight,
  //       html.scrollHeight,
  //       html.offsetHeight
  //     );
  //     const windowHeight = window.innerHeight;
  //     const offset = window.pageYOffset;
  //     const delta = nodeTop - offset;
  //     const bottomScrollableY = height - windowHeight;
  //     const targetY = bottomScrollableY < delta ? bottomScrollableY - (height - nodeTop - nodeHeight + offset) : delta;

  //     let startTime = Date.now();
  //     let percentage = 0;

  //     function step() {
  //       const elapsed = Date.now() - startTime;

  //       if (elapsed > settings.duration) {
  //         clearTimeout(timer);
  //       }

  //       percentage = elapsed / settings.duration;

  //       if (percentage > 1) {
  //         clearTimeout(timer);

  //         if (callback) {
  //           callback();
  //         }
  //       } else {
  //         const yScroll = settings.easing.outQuint(0, elapsed, offset, targetY, settings.duration);
  //         window.scrollTo(0, yScroll);
  //         timer = setTimeout(step, 10);
  //       }
  //     }

  //     let timer = setTimeout(step, 10);
  //   };

  //   useEffect(() => {
  //     // Optionally, you can handle initial scroll based on URL hash
  //     const hash = window.location.hash.substring(1);
  //     if (hash) {
  //       smoothScrollTo(hash);
  //     }

  //   }, []);

  //   const handleScrollTo = (targetId) => {
  //  setTimeout(()=>{
  //   smoothScrollTo(targetId);
  //  },100)

  //   };
  return (
    <div className="Feature-section" id="box">
      <div className="feature-box">
        <img src={feat} alt="" />
        <div className="feature-box-container">
          <div className="title-feature">Stage 1 Module</div>
          <div className="content-feature">
            Verbal / Non verbal intelligence tests & PPDT mock test would be
            conducted and all relevant aspects of OIR tests & PPDT would be
            explained in detail.
          </div>
          <div>
            <svg
              width="143"
              height="19"
              viewBox="0 0 143 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"
                fill="#FFCB11"
              />
              <path
                d="M40.5 0L42.6329 6.56434H49.535L43.9511 10.6213L46.084 17.1857L40.5 13.1287L34.916 17.1857L37.0489 10.6213L31.465 6.56434H38.3671L40.5 0Z"
                fill="#FFCB11"
              />
              <path
                d="M71.5 0L73.6329 6.56434H80.535L74.9511 10.6213L77.084 17.1857L71.5 13.1287L65.916 17.1857L68.0489 10.6213L62.465 6.56434H69.3671L71.5 0Z"
                fill="#FFCB11"
              />
              <path
                d="M102.5 0L104.633 6.56434H111.535L105.951 10.6213L108.084 17.1857L102.5 13.1287L96.916 17.1857L99.0489 10.6213L93.465 6.56434H100.367L102.5 0Z"
                fill="#FFCB11"
              />
              <path
                d="M133.5 0L135.633 6.56434H142.535L136.951 10.6213L139.084 17.1857L133.5 13.1287L127.916 17.1857L130.049 10.6213L124.465 6.56434H131.367L133.5 0Z"
                fill="#FFCB11"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="feature-box">
        <img src={feat1} alt="" />
        <div className="feature-box-container">
          <div className="title-feature">Psychology Module</div>
          <div className="content-feature">
            Theoretical aspects of the psychological tests would be explained in
            detail and relevant mock tests ( TAT, WAT, SRT & SD) would be
            administered.
          </div>
          <div>
            <svg
              width="143"
              height="19"
              viewBox="0 0 143 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"
                fill="#FFCB11"
              />
              <path
                d="M40.5 0L42.6329 6.56434H49.535L43.9511 10.6213L46.084 17.1857L40.5 13.1287L34.916 17.1857L37.0489 10.6213L31.465 6.56434H38.3671L40.5 0Z"
                fill="#FFCB11"
              />
              <path
                d="M71.5 0L73.6329 6.56434H80.535L74.9511 10.6213L77.084 17.1857L71.5 13.1287L65.916 17.1857L68.0489 10.6213L62.465 6.56434H69.3671L71.5 0Z"
                fill="#FFCB11"
              />
              <path
                d="M102.5 0L104.633 6.56434H111.535L105.951 10.6213L108.084 17.1857L102.5 13.1287L96.916 17.1857L99.0489 10.6213L93.465 6.56434H100.367L102.5 0Z"
                fill="#FFCB11"
              />
              <path
                d="M133.5 0L135.633 6.56434H142.535L136.951 10.6213L139.084 17.1857L133.5 13.1287L127.916 17.1857L130.049 10.6213L124.465 6.56434H131.367L133.5 0Z"
                fill="#FFCB11"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="feature-box">
        <img src={feat2} alt="" />
        <div className="feature-box-container">
          <div className="title-feature">Group Task</div>
          <div className="content-feature">
            GD, GPE and Lecturette tasks will be conducted as conducted at the
            SSB and other tasks will be explained with the help of videos and
            diagrams.
          </div>
          <div>
            <svg
              width="143"
              height="19"
              viewBox="0 0 143 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"
                fill="#FFCB11"
              />
              <path
                d="M40.5 0L42.6329 6.56434H49.535L43.9511 10.6213L46.084 17.1857L40.5 13.1287L34.916 17.1857L37.0489 10.6213L31.465 6.56434H38.3671L40.5 0Z"
                fill="#FFCB11"
              />
              <path
                d="M71.5 0L73.6329 6.56434H80.535L74.9511 10.6213L77.084 17.1857L71.5 13.1287L65.916 17.1857L68.0489 10.6213L62.465 6.56434H69.3671L71.5 0Z"
                fill="#FFCB11"
              />
              <path
                d="M102.5 0L104.633 6.56434H111.535L105.951 10.6213L108.084 17.1857L102.5 13.1287L96.916 17.1857L99.0489 10.6213L93.465 6.56434H100.367L102.5 0Z"
                fill="#FFCB11"
              />
              <path
                d="M133.5 0L135.633 6.56434H142.535L136.951 10.6213L139.084 17.1857L133.5 13.1287L127.916 17.1857L130.049 10.6213L124.465 6.56434H131.367L133.5 0Z"
                fill="#FFCB11"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="feature-box">
        <img src={feat3} alt="" />
        <div className="feature-box-container">
          <div className="title-feature">Personal Interview</div>
          <div className="content-feature">
          All theoretical aspects to include PIQ, etc. would be explained followed by mock interviews and feedback, in detail at SSB BULLSEYE.
          </div>
          <div>
            <svg
              width="143"
              height="19"
              viewBox="0 0 143 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 0L11.6329 6.56434H18.535L12.9511 10.6213L15.084 17.1857L9.5 13.1287L3.91604 17.1857L6.04892 10.6213L0.464963 6.56434H7.36712L9.5 0Z"
                fill="#FFCB11"
              />
              <path
                d="M40.5 0L42.6329 6.56434H49.535L43.9511 10.6213L46.084 17.1857L40.5 13.1287L34.916 17.1857L37.0489 10.6213L31.465 6.56434H38.3671L40.5 0Z"
                fill="#FFCB11"
              />
              <path
                d="M71.5 0L73.6329 6.56434H80.535L74.9511 10.6213L77.084 17.1857L71.5 13.1287L65.916 17.1857L68.0489 10.6213L62.465 6.56434H69.3671L71.5 0Z"
                fill="#FFCB11"
              />
              <path
                d="M102.5 0L104.633 6.56434H111.535L105.951 10.6213L108.084 17.1857L102.5 13.1287L96.916 17.1857L99.0489 10.6213L93.465 6.56434H100.367L102.5 0Z"
                fill="#FFCB11"
              />
              <path
                d="M133.5 0L135.633 6.56434H142.535L136.951 10.6213L139.084 17.1857L133.5 13.1287L127.916 17.1857L130.049 10.6213L124.465 6.56434H131.367L133.5 0Z"
                fill="#FFCB11"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* <div className="feature-box"></div>
      <div className="feature-box"></div>
      <div className="feature-box"></div> */}
      {/* <div className="Feature-section-container">
            <div className='Feature'><div className='content-container' style={act?{display:"none"}:{}}>Verbal / Non verbal intelligence tests & PPDT mock test would be conducted and all relevant aspects of  OIR tests & PPDT would be explained in detail.</div><div className='Feature-container' style={!act?{display:"none"}:{}}><div className='Feature-img'><img src={im1} alt="" /></div><div className='Feature-content'>Stage 1 Module</div></div><div className='Box-circle' onClick={()=>{setact(!act);}}><FaArrowRightLong className='rotate-45'/></div></div>
            <div className='Feature'><div className='content-container' style={act1?{display:"none"}:{}}>Theoretical aspects of the psychological tests  would be explained in detail and relevant mock tests ( TAT, WAT, SRT & SD) would be administered.  All responses will be analyzed & feed back  will be provided. Focus would be on explaining the concepts, linking it to 15 OLQs. </div><div className='Feature-container' style={!act1?{display:"none"}:{}}><div className='Feature-img'><img src={im2} alt="" /></div><div className='Feature-content'>Psychology Module</div></div><div className='Box-circle' onClick={()=>{setact1(!act1);}}><FaArrowRightLong className='rotate-45'/></div></div>
            <div className='Feature'><div className='content-container' style={act2?{display:"none"}:{}}>GD, GPE and Lecturette tasks will be conducted as conducted at the SSB and other tasks will be explained with the help of videos and diagrams. Thrust will be on making the candidates understand the concepts & expectations of the SSB.</div><div className='Feature-container' style={!act2?{display:"none"}:{}}><div className='Feature-img'><img src={im3} alt="" /></div><div className='Feature-content'>Group Task</div></div><div className='Box-circle' onClick={()=>{setact2(!act2);}}><FaArrowRightLong className='rotate-45'/></div></div>
            <div className='Feature'><div className='content-container' style={act3?{display:"none"}:{}}>All theoretical aspects to include PIQ, etc. would be explained followed by mock interviews and feedback, in detail.</div><div className='Feature-container' style={!act3?{display:"none"}:{}}><div className='Feature-img' ><img src={im11} alt="" /></div><div className='Feature-content'>Personal Interview</div></div><div className='Box-circle' onClick={()=>{setact3(!act3);}}><FaArrowRightLong className='rotate-45'/></div></div>
        </div> */}
    </div>
  );
}

export default Feature;
