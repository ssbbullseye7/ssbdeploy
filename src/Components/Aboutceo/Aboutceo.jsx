import React, { useEffect, useState } from "react";
import "./style.css";
import im13 from "../../im13.jpg";
import im10 from "../../im10.jpg";
import im12 from "../../im12.jpg";
import rect1 from "../../Rectangle 7.png";
import rect2 from "../../Rectangle 8.png";
import { SlMouse } from "react-icons/sl";
import { FaPlay } from "react-icons/fa";
import vid from "../../ssbvid.mp4";

import GroupsIcon from '@mui/icons-material/Groups';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ChatIcon from '@mui/icons-material/Chat';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import VerifiedIcon from '@mui/icons-material/Verified';
import LoopIcon from '@mui/icons-material/Loop';


const imagesArray = [im12, im10, im13];
function Aboutceo() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const CheckIcon = () => (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.89228 8.7309L7.49117 10.132C8.35654 10.7223 9.33099 11.1339 10.3575 11.3429C11.3839 11.5518 12.4418 11.5537 13.469 11.3486L13.0907 9.4518C11.6502 9.73932 10.1543 9.48246 8.89228 8.7309ZM5.0533 15.7952L5.25292 15.7537C5.34601 15.7342 5.43436 15.6967 5.51292 15.6431C5.59148 15.5895 5.65871 15.521 5.71076 15.4414C5.76281 15.3618 5.79867 15.2727 5.81628 15.1793C5.83388 15.0858 5.8329 14.9898 5.81339 14.8967L5.49583 13.378C5.47947 13.2996 5.48288 13.2183 5.50576 13.1416C5.52863 13.0648 5.57026 12.995 5.62688 12.9383L6.90537 11.6598C7.01449 11.5507 7.0758 11.4027 7.0758 11.2484C7.0758 11.0941 7.01449 10.9461 6.90537 10.8369L6.38235 10.3139L8.77112 7.92515L7.25174 6.40578L6.18011 7.47738C6.11628 7.4146 6.03022 7.37959 5.94069 7.37996C5.85116 7.38033 5.7654 7.41607 5.70209 7.47938C5.63879 7.54268 5.60305 7.62844 5.60268 7.71797C5.6023 7.80751 5.63732 7.89356 5.7001 7.95739L5.88637 8.14366L2.5625 11.4675L2.56283 12.3337L3.58124 13.3277C4.10193 13.1342 4.09642 13.4134 4.22222 14.0146L4.52182 15.4468C4.53386 15.5046 4.55718 15.5595 4.59043 15.6083C4.62369 15.6571 4.66624 15.6989 4.71564 15.7312C4.76505 15.7636 4.82034 15.7859 4.87837 15.7968C4.9364 15.8078 4.99602 15.8073 5.05383 15.7952H5.0533Z"
        fill="black"
      />
    </svg>
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesArray.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="About" id="about">
      <div className="rect-container">
        <img src={rect1} style={{ right: "150px" }} alt="" />
        <img src={rect2} style={{ right: "0px" }} alt="" />
      </div>
      <div className="About-content-container">
        <div className="about-left">
          <div className="about-left-header">About Us</div>
          <div className="about-left-content">
            SSB Bullseye is your ultimate destination for <b>online</b> SSB interview coaching
            and NDA written exam preparation. With expert mentors, proven
            strategies, and personalized feedback, we ensure comprehensive
            training tailored to enhance your cognitive, leadership, and
            problem-solving abilities. Our interactive modules, including
            audio-visual tools, make learning effective and engaging. Whether
            you're aiming for SSB selection or cracking the NDA exam, we equip
            you with the skills and confidence to succeed.
          </div>
          {/* <strong>Why Join Us ?</strong> */}
          <div className="about-left-subcontent">
                  <div className="about-features-grid">
          <div className="about-feature-item">
            <GroupsIcon className="about-icon" fontSize="large"/>
            <span>Small Batch Training</span>
          </div>
          <div className="about-feature-item">
            <WorkspacePremiumIcon className="about-icon" fontSize="large"/>
            <span>Expert Faculty & Mentorship</span>
          </div>
          <div className="about-feature-item">
            <AssignmentIcon className="about-icon" fontSize="large"/>
            <span>Mock Tests & Practice Sessions</span>
          </div>
          <div className="about-feature-item">
            <ChatIcon className="about-icon" fontSize="large"/>
            <span>Personalised Feedback</span>
          </div>
          <div className="about-feature-item">
            {/* <MenuBookIcon className="about-icon" fontSize="large"/>
            <span>Comprehensive Study Material</span> */}
            <LoopIcon className="about-icon" fontSize="large"/>
            <span>Regular Progress Tracking</span>

          </div>
          <div className="about-feature-item">
            <VerifiedIcon className="about-icon" fontSize="large"/>
            <span>Proven Success Record</span>
          </div>
        </div>

            {/* <div className="about-left-point">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.89228 8.7309L7.49117 10.132C8.35654 10.7223 9.33099 11.1339 10.3575 11.3429C11.3839 11.5518 12.4418 11.5537 13.469 11.3486L13.0907 9.4518C11.6502 9.73932 10.1543 9.48246 8.89228 8.7309ZM5.0533 15.7952L5.25292 15.7537C5.34601 15.7342 5.43436 15.6967 5.51292 15.6431C5.59148 15.5895 5.65871 15.521 5.71076 15.4414C5.76281 15.3618 5.79867 15.2727 5.81628 15.1793C5.83388 15.0858 5.8329 14.9898 5.81339 14.8967L5.49583 13.378C5.47947 13.2996 5.48288 13.2183 5.50576 13.1416C5.52863 13.0648 5.57026 12.995 5.62688 12.9383L6.90537 11.6598C7.01449 11.5507 7.0758 11.4027 7.0758 11.2484C7.0758 11.0941 7.01449 10.9461 6.90537 10.8369L6.38235 10.3139L8.77112 7.92515L7.25174 6.40578L6.18011 7.47738C6.11628 7.4146 6.03022 7.37959 5.94069 7.37996C5.85116 7.38033 5.7654 7.41607 5.70209 7.47938C5.63879 7.54268 5.60305 7.62844 5.60268 7.71797C5.6023 7.80751 5.63732 7.89356 5.7001 7.95739L5.88637 8.14366L2.5625 11.4675L2.56283 12.3337L3.58124 13.3277C4.10193 13.1342 4.09642 13.4134 4.22222 14.0146L4.52182 15.4468C4.53386 15.5046 4.55718 15.5595 4.59043 15.6083C4.62369 15.6571 4.66624 15.6989 4.71564 15.7312C4.76505 15.7636 4.82034 15.7859 4.87837 15.7968C4.9364 15.8078 4.99602 15.8073 5.05383 15.7952H5.0533ZM4.95857 12.2602C4.89515 12.1967 4.85951 12.1107 4.85951 12.021C4.85951 11.9313 4.89515 11.8453 4.95857 11.7819L5.62921 11.1112C5.69263 11.0478 5.77865 11.0122 5.86834 11.0122C5.95802 11.0122 6.04404 11.0478 6.10746 11.1112L6.34805 11.3518C6.41148 11.4152 6.44711 11.5013 6.44711 11.591C6.44711 11.6807 6.41148 11.7667 6.34805 11.8301L5.67655 12.5016C5.61313 12.565 5.52711 12.6006 5.43743 12.6006C5.34774 12.6006 5.26172 12.565 5.1983 12.5016L4.95797 12.2613L4.95857 12.2602ZM8.15743 6.39329C8.14381 6.37943 8.13137 6.36446 8.12024 6.34854C8.06827 6.27005 8.04569 6.17574 8.05648 6.08223C8.06727 5.98872 8.11073 5.90203 8.17921 5.83744L10.9236 3.093C11.0832 2.9335 11.3319 2.9236 11.4795 3.07122L12.3009 3.89267C12.4416 4.03328 12.4401 4.26776 12.2977 4.42877L9.72216 7.34081C9.58005 7.50152 9.34935 7.53113 9.19273 7.41927C9.17681 7.40813 9.16184 7.39569 9.14798 7.38208L8.15859 6.3927L8.15743 6.39329ZM13.9162 1.19531L14.4392 1.71833L13.8816 2.08648L12.6513 3.31676L12.3175 2.9829L13.5481 1.75233L13.9162 1.19531ZM11.8244 2.00105C11.7907 1.96738 11.7718 1.92171 11.7718 1.87408C11.7718 1.82646 11.7907 1.78079 11.8244 1.74712L11.9383 1.63323C11.955 1.61655 11.9748 1.60332 11.9966 1.59429C12.0183 1.58527 12.0417 1.58062 12.0653 1.58062C12.0889 1.58062 12.1122 1.58527 12.134 1.59429C12.1558 1.60332 12.1756 1.61655 12.1923 1.63323L12.599 2.03997L12.2312 2.40786L11.8244 2.00105Z"
                  fill="black"
                />
              </svg>{" "}
              We equip you with skills and confidence needed to conquer these
              rigorous assessments.
            </div> */}
          </div>
        </div>

        <div className="about-right">
          <video width="100%" height="100%" controls>
            <source src={vid} type="video/mp4" />
          </video>
        </div>
      </div>
      {/* <div className='About-img'>
   {imagesArray.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={`image test ${index === currentImageIndex ? "visible" : "hidden"}`}
          />
        ))}
   
   </div> */}
      {/* <div className='About-content'>
    <div className='About-content-header'>About Us</div>
    <div className='About-content-content'>At SSB BullsEye, we excel in guiding candidates toward success in SSB & NDA exams. With experienced mentors and a proven track record, our tailored approach ensures comprehensive preparation. We equip you with skills and confidence needed to conquer these rigorous assessments. The SSB training modules have been carefully designed keeping the cognitive and leadership abilities of the aspirants.
</div>
   </div> */}
    </div>
  );
}

export default Aboutceo;
