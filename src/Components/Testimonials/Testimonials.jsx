import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import im1 from "../../im1.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaPlay } from "react-icons/fa";
import "./style.css";
import alo from "../../alo.jpg";
import ARYA from "../../ARYA.jpg";
import sak from "../../shaksham.jpg";
import ary from "../../aryaman.mp4";
import saks from "../../shaksham.mp4";
import shlok from "../../shlok.mp4";
import profileimg from "../../profileimg.jpg";
// import required modules
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";

export default function Testimonials({isPageNDA}) {
  const slidesData = [
    {
      imgSrc: ARYA,
      name: "Aryaman Bhatt",
      url:ary,
      content:
        "Aryaman Bhatt gets recommended by 2 AFSB Mysore, in his FIRST ATTEMPT. 160 candidates reported, 49 screened in and finally 6 candidates recommended, Aryaman being the ONLY FRESHER to be recommended.",
    },
    {
      imgSrc: sak,
      name: "Shaksham Kumar",
      url:saks,
      content:
        "Shaksham Kumar clears  the SSB in his FIRST ATTEMPT. Out of 85 candidates who reported at Naval Selection Board ( NSB)Visakhapatnam, 5 finally got recommended. Shaksham being one of them.",
    },
    {
      imgSrc: alo,
      name: "Shlok",
      url:shlok,
      content:
        "Enrolling in SSBBullseye's course was a game-changer for my AFCAT preparation. The course structure, coupled with expert guidance, honed my skills effectively. Clearing AFCAT was a testament to SSBBullseye's commitment to student success. I'm grateful for their support and highly recommend their courses to all AFCAT aspirants",
    },
    {
      imgSrc: profileimg,
      url:null,
      name: "Lakha Tiwari",
      content:
        "The 12 day training and mentoring session I had under ssbbullseye was one of the most productive experiences I've had in my learning journey. The entire program gave me deep knowledge of how to conduct myself during the SSB interview along with a strategic approach to work on my areas for improvement.",
    },
    {
      imgSrc: profileimg,
      url:null,
      name: "Kavya Suresh",
      content:
        "SSB Bullseye has not only prepared me well to face the SSB interview but also to face any future interviews and tests. These 12 days have helped me understand where I stand and areas where I should improve. It's been a real eye opener for me. More than anything it's the way Sir conducts the classes that makes it so informative and enjoyable."},
    {
      imgSrc: profileimg,
      url:null,
      name: "Akhil S Kaimal",
      content:
        "It was a great learning experience from the SSB Bullseye.Sir your guidance and mentoring about the whole  process of ssb was amazing and really made me know as to where I am standing now and which are the areas of improvement that I  need to overcome.Sir your guidance and mentoring taught and  gave me the utmost confidence to face the SSB.",
    },

    // Add more slide data objects as needed
  ];
  const handlePlayButtonClick = (videoUrl) => {
    window.open(videoUrl, '_blank');
  };

  return (
    <div className="testimonial-container">
     {!isPageNDA  && <div className="testimonial-header">What Our Students Say</div>}
      <div className="testimonial-carousal">
        <Swiper
          // slidesPerView={2}
          // centeredSlides={true}
          grabCursor={true}
          loop={true}
          // centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 20,
              centeredSlides: true,
            },

            800: {
              slidesPerView: 2,
              spaceBetween: 30,
              // centeredSlides:true
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="tempbox">
                <div className="img-container">
                  <img src={slide.imgSrc} width={55} height={55} alt="" style={{borderRadius:"50%"}}/>
                  <div className="stars">
                
                  {slide.url!=null&&<button className="watchButton" onClick={()=>handlePlayButtonClick(slide.url)}>Video</button>}
                    {/* <svg
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
                    </svg> */}
                  </div>
                </div>
                <div className="tempbox-name">{slide.name}</div>
                <div className="tempbox-content">{slide.content}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
