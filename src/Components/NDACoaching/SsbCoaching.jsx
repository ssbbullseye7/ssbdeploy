import React, { useEffect, useState } from "react";
import "./ssbstyle.css";
import sol from "../../sol.png";
import Testimonials from "../Testimonials/Testimonials";
import Ribbon from "../Ribon/Ribon";
import Feature from "../Feature/Feature";

const SsbCoaching = ({ setenroll, setSSB }) => {
  const smoothScrollTo = (id, callback) => {
    performScrollTo(id, callback);
  };

  const performScrollTo = (id, callback) => {
    const settings = {
      duration: 1000,
      easing: {
        outQuint: function (x, t, b, c, d) {
          return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        },
      },
    };

    const node = document.getElementById(id);
    const nodeTop = node.offsetTop - 80;
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
    const targetY =
      bottomScrollableY < delta
        ? bottomScrollableY - (height - nodeTop - nodeHeight + offset)
        : delta;

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
        const yScroll = settings.easing.outQuint(
          0,
          elapsed,
          offset,
          targetY,
          settings.duration
        );
        window.scrollTo(0, yScroll);
        timer = setTimeout(step, 10);
      }
    }

    let timer = setTimeout(step, 10);
  };

  const [activeTab, setActiveTab] = useState('subjects'); //dynamic tabs

  // Content for dynamic tabs
  const tabContent = {
    subjects: (
      <ul className="subject-list">
        <li className="subject-list">
          Mathematics (Algebra, Trigonometry, Calculus, Probability, etc.)
        </li>
        <li>General Ability Test (GAT)</li>
        <li>English (Grammar, Comprehension, Vocabulary)</li>
        <li>
          General Knowledge (History, Geography, Science, Economics, Polity, etc.)
        </li>
        <li>Current Affairs (Latest news & events)</li>
      </ul>
    ),
    whoCanApply: (
      <ul className="subject-list">
        <li>Indian citizens only</li>
        <li>Age 16.5 to 19.5 years</li>
        <li>12th pass/appearing (for NDA-1)</li>
        <li>No physical disabilities</li>
        <li>Unmarried male candidates</li>
      </ul>
    ),
    whyNDA: (
      <ul className="subject-list">
        <li>Prestigious career in defense</li>
        <li>World-class training</li>
        <li>Guaranteed job after completion</li>
        <li>Leadership development</li>
        <li>Excellent benefits and pension</li>
      </ul>
    )
  };

  useEffect(() => {
    // Optionally, you can handle initial scroll based on URL hash
    const hash = window.location.hash.substring(1);
    if (hash) {
      smoothScrollTo(hash);
    }
  }, []);

  const handleScrollTo = (targetId) => {
    setTimeout(() => {
      smoothScrollTo(targetId);
    }, 100);
  };

  return (
    <div className="nda" id="nda">
      <div className="background-img">
        <img src={sol} alt="" />
      </div>
      <div className="nda-Hero-header">
        <div className="nda-header-content">SSB - Transforming Potential into Selection</div>
        <div
          className="enrollbtn"
          onClick={() => {
            setenroll(true);
            setSSB(false);
            handleScrollTo("enroll");
          }}
        >
          Enroll now
        </div>
      </div>

      <div className="nda-details-box">
        <div className="ssbbox-1">
          {/* <p className="b1-p">SSB - Transforming Potential Into Selection</p> */}
          <p className="b1-p-normal" style={{ textAlign: "justify" }}>
          Choosing the right guidance for SSB preparation can make all the difference, and SSB Bullseye stands out as a top choice for aspirants aiming to join the armed forces as Officers. With a team of experienced ex-SSB assessors and a personalized mentorship approach, SSB Bullseye focuses not just on cracking the assessment tests but on truly transforming candidates to embody the Officer-Like Qualities (OLQs) essential for selection. Our unique blend of psychological training, personality development, and real-time feedback ensures that every aspirant is well-equipped to face the SSB with utmost confidence.

          </p>

          <p className="b1-p">
          Our 12 days<b> ONLINE </b>structured program has been carefully  designed &  crafted to include :
          </p>
          <div>
          <Feature />
          </div>
          

          <p className="b1-p-normal" style={{ textAlign: "justify" }}>Our 12-day SSB training program would also include a special session on Personality Development aimed at enhancing self-confidence, improving communication skills, fostering a positive mindset, and refining overall behavior to align with Officer-Like Qualities (OLQs). This session will help candidates present their true personality effectively during  the various  assessment tests at the SSB.</p>
          
        </div>
        
      </div>


      <div className="box-4">
        <div
          className="enrollbtn-bottom"
          onClick={() => {
            setenroll(true);
            setSSB(false);
            handleScrollTo("enroll");
          }}
        >
          Enroll now
        </div>
      </div>
      <h1 style={{ textAlign: "center",  fontWeight: 600,fontFamily: "Hind Vadodara",fontSize: "40px", marginBottom:"5px", }}>Selected Students</h1>
      <Testimonials isPageNDA={true}/>
    </div>
  );
};

export default SsbCoaching;
