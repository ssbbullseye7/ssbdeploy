import React, { useEffect, useState } from "react";
import "./style.css";
import sol from "../../sol.png";
import Testimonials from "../Testimonials/Testimonials";
import Ribbon from "../Ribon/Ribon";
const NdaCoaching = ({ setenroll, setnda }) => {
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
        <div className="nda-header-content">Your Gateway to NDA Success</div>
        <div
          className="enrollbtn"
          onClick={() => {
            setenroll(true);
            handleScrollTo("enroll");
          }}
        >
          Enroll now
        </div>
      </div>

      <div className="nda-details-box">
        <div className="box-1">
          <p className="b1-p">Why Choose Us for NDA Written Exam Coaching?</p>
          <p className="b1-p-normal">
            At <span className="bold-text">SSB Bullseye</span>, we specialize in
            preparing aspirants for the
            <span className="bold-text"> National Defence Academy (NDA) </span>
            written examination with a structured and result-oriented approach.
            Our experienced faculty, comprehensive study materials, and regular
            practice tests ensure that students are well-equipped to ace the
            exam.
          </p>

          <p className="b1-p">
            Our Online NDA & NA written exam Coaching Program Includes:
          </p>

          <ul>
            <li>
              <span className="bold-text">Expert Faculty – </span>{" "}
              <span className="b1-p-normal">
                Learn from highly experienced teachers with expertise in NDA
                exam patterns and syllabus.
              </span>
            </li>
            <li>
              <span className="bold-text">Comprehensive Study Material – </span>{" "}
              <span className="b1-p-normal">
                {" "}
                Get access to meticulously curated notes, books, and question
                banks.
              </span>
            </li>
            <li>
              <span className="bold-text">
                Regular Mock Tests & Analysis –{" "}
              </span>{" "}
              <span className="b1-p-normal">
                {" "}
                Evaluate your performance through frequent tests and
                personalized feedback.
              </span>
            </li>
            <li>
              <span className="bold-text">Doubt Clearing Sessions – </span>{" "}
              <span className="b1-p-normal">
                {" "}
                Special sessions to resolve doubts and strengthen weak areas.{" "}
              </span>
            </li>
            <li>
              <span className="bold-text">Time Management Strategies – </span>{" "}
              <span className="b1-p-normal">
                {" "}
                Learn effective techniques to solve questions within the
                stipulated time.{" "}
              </span>
            </li>
            <li>
              <span className="bold-text">
                Current Affairs & General Knowledge Updates. –{" "}
              </span>{" "}
              <span className="b1-p-normal">
                {" "}
                Stay updated with the latest national and international events
                relevant to the exam.{" "}
              </span>
            </li>
            <li>
              <span className="bold-text">
                Personalized Guidance & Mentorship –{" "}
              </span>{" "}
              <span className="b1-p-normal">
                {" "}
                One-on-one guidance to help students strategize and stay
                motivated.{" "}
              </span>
            </li>
          </ul>
        </div>
        <div className="box-2">
          <u className="cour-det">COURSE DETAILS</u>
          <span className="bold-text-white">
            FIRST ONLINE NDA BATCH STARTING ON 10th May 2025
          </span>
          <br />
          <span className="bold-text-white">
            Join Our 3-Month ONLINE NDA Exam Coaching Program
          </span>
          <span className="bold-text-white">Starting From: 10th May 2025</span>

          <br />
          <span className="bold-text-white">
            Get the Best Training to Crack NDA Written Exam – Now Online!
          </span>
          <span className="bold-text-yellow">
            {" "}
            Special Inaugural Discount – Limited Seats!{" "}
          </span>
          {/* <Ribbon discountText=""> */}
          <Ribbon discountText={
          <>
            <span style={{textDecoration: 'line-through'}}>12000/-</span>
            <span> 9000/- Only</span>
          </>
        }>
            <div className="enquireyBtn"  onClick={()=>{ setnda(false) && handleScrollTo('contact');}}>Enquiry Now</div>
          </Ribbon>
        </div>
      </div>

      <div className="box-3">
      <div className="top-btns">
        <div 
          onClick={() => setActiveTab('subjects')}
          style={{ backgroundColor: activeTab === 'subjects' ? '#1a4a1a' : '#2B5B1F' }}
        >
          Subject covered
        </div>
        <div 
          onClick={() => setActiveTab('whoCanApply')}
          style={{ backgroundColor: activeTab === 'whoCanApply' ? '#1a4a1a' : '#2B5B1F' }}
        >
          Who can Apply?
        </div>
        <div 
          onClick={() => setActiveTab('whyNDA')}
          style={{ backgroundColor: activeTab === 'whyNDA' ? '#1a4a1a' : '#2B5B1F' }}
        >
          Why NDA?
        </div>
      </div>
      <div>
        {tabContent[activeTab]}
      </div>
    </div>

      <div style={{ marginVertical: "20px", display: "flex", marginLeft: "40px",  marginRight:"40px"}} className="box-4">
        <p className="b1-p-normal">
          Click on Registration. Select NDA& NA Written Exams, Enroll Today &
          Start Your Journey Towards NDA! Don't miss this opportunity to join
          India’s best NDA coaching institute.
        </p>
        <div
          className="enrollbtn"
          onClick={() => {
            setenroll(true);
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

export default NdaCoaching;
