import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Feature from "../Components/Feature/Feature";
import Classroom from "../Components/Classroom/Classroom";
import Aboutceo from "../Components/Aboutceo/Aboutceo";
import Point from "../Components/Point/Point";
import Testimonials from "../Components/Testimonials/Testimonials";
import Employee from "../Components/Employee/Employee";
import Blogs from "../Components/Blogs/Blogs";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import "../App.css";
import { useLocation } from "react-router-dom";
import Enroll from "./Enroll";
import NdaCoaching from "../Components/NDACoaching/NdaCoaching";
import NdaEnroll from "./NdaEnroll";

import SsbCoaching from "../Components/NDACoaching/SsbCoaching";


function Container() {
  const [enroll, setenroll] = useState(false);
  const [nda, setnda] = useState(false);
  const [ssb,setSSB] = useState(false);
  return (
    <div>
      <Navbar enroll={enroll} nda={nda} setenroll={setenroll} setnda={setnda} ssb={ssb} setSSB={setSSB}/>
      {enroll && !nda  && !ssb && <Enroll />}
      {enroll && nda  && !ssb && <NdaEnroll />}
      {nda && !enroll && !ssb && <NdaCoaching  setenroll={setenroll} setnda={setnda} setssb={setSSB} />}
      {!nda && !enroll && ssb && <SsbCoaching setenroll={setenroll} setSSB={setSSB}/>}
      {!enroll && !nda && !ssb && (
        <>
          <Hero enroll={enroll} setenroll={setenroll}  />
          <Aboutceo />
          {/* <Feature enroll={enroll} setenroll={setenroll} /> */}
          <Testimonials />
          {/* <Classroom enroll={enroll} setenroll={setenroll}/> */}
          {/* <Point/> */}

          {/* <Employee/> */}
          {/* <Blogs /> */}
          <Contact />
          {/* <SsbCoaching /> */}
        </>
      )}

      {/* <Enroll/> */}
      <Footer />
    </div>
  );
}

export default Container;
