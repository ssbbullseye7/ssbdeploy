import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import svglogo from "../../Primarygreen.svg";
import { RiArrowDropDownLine } from "react-icons/ri";
// import { useLocation, useNavigate } from "react-router-dom";
// import { Link as RouterLink } from "react-router-dom";
// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
// import { setActiveLink } from "react-scroll/modules/mixins/scroller";
function Navbar({ setenroll, enroll, setnda, nda }) {
  const [isRegOpen, setIsRegOpen] = useState(false);
  const regDropdownRef = useRef(null);
  const regContainerRef = useRef(null);

  const [Active, SetActive] = useState("Home");
  const [check, setcheck] = useState(false);
  const [drop, setdrop] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const smoothScrollTo = (id, callback) => {
    // Check if the current route is /enroll

    // If the current route is already /home, scroll directly
    performScrollTo(id, callback);
    setTimeout(() => {
      setcheck(false);
    }, 1000);
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
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    SetActive("Eligibilty");
    setIsOpen(!isOpen);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  // useEffect(() => {
  //   // Optionally, you can handle initial scroll based on URL hash
  //   const hash = window.location.href.split("#");
  //   console.log(hash[1]);
  //   if (hash) {
  //     handleScrollTo(hash);
  //   }
  // }, []);

  const toggleRegDropdown = () => {
    SetActive("Registration");
    setIsRegOpen(!isRegOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        regContainerRef.current &&
        !regContainerRef.current.contains(event.target) &&
        regDropdownRef.current &&
        !regDropdownRef.current.contains(event.target)
      ) {
        setIsRegOpen(false);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // const handleCoursesChange = (e) => {
  //   const value = e.target.value;
  //   // Reset select to placeholder after selection
  //   e.target.selectedIndex = 0;
  //   if (value === "ssb") {
  //     // Scroll on the current page to element with id "ssb"
  //     handleScrollTo("home");
  //     SetActive("Courses");
  //     setenroll(false);
  //     setnda(false);
  //   } else if (value === "nda") {
  //     // Open a new page for NDA coaching Course
  //     setnda(true);
  //     setenroll(false);
  //     SetActive("Courses");
  //   }
  // };

  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const coursesDropdownRef = useRef(null);

  const toggleCoursesDropdown = () => {
    SetActive("Courses");
    setIsCoursesOpen(!isCoursesOpen);
  };

  const handleCoursesSelection = (value) => {
    setIsCoursesOpen(false);
    if (value === "ssb") {
      handleScrollTo("home");
      SetActive("Courses");
      setenroll(false);
      setnda(false);
    } else if (value === "nda") {
      setnda(true);
      setenroll(false);
      SetActive("Courses");
    }
  };

  useEffect(() => {
    const handleClickOutsideCourses = (event) => {
      if (
        coursesDropdownRef.current &&
        !coursesDropdownRef.current.contains(event.target)
      ) {
        setIsCoursesOpen(false);
        SetActive("");
      }
    };
    document.addEventListener("mousedown", handleClickOutsideCourses);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideCourses);
    };
  }, []);

  return (
    <div className="Nav">
      <div
        className="logo"
        style={{ cursor: "pointer", paddingLeft: "80px" }}
        onClick={() => setenroll(false)}
      >
        <img src={svglogo} alt="" width={120} />
      </div>
      <div className="menu">
        <div
          style={
            Active == "Home"
              ? {
                  cursor: "pointer",
                  color: "yellow",
                  borderBottom: "1px solid yellow",
                }
              : { cursor: "pointer" }
          }
          onClick={() => {
            setnda(false);
            setenroll(false);
            handleScrollTo("home");
            SetActive("Home");
          }}
        >
          Home
        </div>
        <div
          style={
            Active == "About us"
              ? {
                  cursor: "pointer",
                  color: "yellow",
                  borderBottom: "1px solid yellow",
                }
              : { cursor: "pointer" }
          }
          onClick={() => {
            setnda(false);
            setenroll(false);
            handleScrollTo("about");
            SetActive("About us");
          }}
        >
          {" "}
          About
        </div>

        <div
          ref={regContainerRef} 
          style={
            Active === "Registration"
              ? {
                  cursor: "pointer",
                  color: "yellow",
                  borderBottom: "1px solid yellow",
                  position: "relative",
                }
              : { cursor: "pointer", position: "relative" }
          }
          onClick={toggleRegDropdown}
          className="eligibilty courses-dropdown-container"
        >
          Registration <RiArrowDropDownLine style={{ fontSize: "30px" }} />
          {isRegOpen && (
            <div
              className="dropdownr"
              ref={regDropdownRef}
              style={{ height: "120px" }}
            >
              <div
                className="dropdown-item"
                onClick={() => {
                  setenroll(true);
                  setnda(false);
                  handleScrollTo("enroll");
                  SetActive("Registration");
                  setIsRegOpen(false);
                }}
              >
                SSB Registration
              </div>
              <div
                className="dropdown-item"
                onClick={() => {
                  setenroll(true);
                  setnda(true);
                  SetActive("Registration");
                  setIsRegOpen(false);
                }}
              >
                NDA Registration
              </div>
            </div>
          )}
        </div>


        <div
          style={
            Active == "Courses"
              ? {
                  cursor: "pointer",
                  color: "yellow",
                  borderBottom: "1px solid yellow",
                  position: "relative",
                }
              : { cursor: "pointer", position: "relative" }
          }
          className="courses-dropdown-container"
          onClick={toggleCoursesDropdown}
        >
          Courses <RiArrowDropDownLine style={{ fontSize: "30px" }} />
          {isCoursesOpen && (
            <div className="dropdown-courses" ref={coursesDropdownRef}>
              <div
                className="dropdown-item"
                onClick={() => handleCoursesSelection("ssb")}
              >
                SSB Preparation Course
              </div>
              <div
                className="dropdown-item"
                onClick={() => handleCoursesSelection("nda")}
              >
                NDA Coaching Course
              </div>
            </div>
          )}
        </div>

        <div
          style={
            Active == "Eligibilty"
              ? {
                  cursor: "pointer",
                  color: "yellow",
                  borderBottom: "1px solid yellow",
                  position: "relative",
                }
              : { cursor: "pointer", position: "relative" }
          }
          onClick={toggleDropdown}
          className="eligibilty courses-dropdown-container"
        >
          Eligibilty <RiArrowDropDownLine style={{ fontSize: "30px" }} />
          {isOpen && (
            <div
              className="dropdown"
              ref={dropdownRef}
              style={{ height: "160px" }}
            >
              <a
                href="https://164.100.158.23/how-to-join.htm"
                className="dropdown-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                Indian Army
              </a>
              <a
                href="https://www.joinindiannavy.gov.in/en/entry/entry/eligibilityform"
                className="dropdown-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                Indian Navy
              </a>
              <a
                href="https://afcat.cdac.in/AFCAT/careerAsPerQualification"
                className="dropdown-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                Indian Air force
              </a>
            </div>
          )}
        </div>
        <div
          style={
            Active == "Contact us"
              ? {
                  cursor: "pointer",
                  color: "yellow",
                  borderBottom: "1px solid yellow",
                }
              : { cursor: "pointer" }
          }
          onClick={() => {
            setnda(false);
            setenroll(false);
            handleScrollTo("contact");
            SetActive("Contact us");
          }}
        >
          {" "}
          Contact
        </div>
      </div>
      {/* <div
        className="enroll hide"
        style={{ cursor: "pointer" }}
        onClick={() => {
          SetActive("Registration");
          setenroll(true);
          handleScrollTo('enroll');
        }}
      >
        Enroll Now
      </div> */}
      <input
        id="toggle1"
        type="checkbox"
        onChange={() => setcheck(!check)}
        checked={check}
      />
      <label class="hamburger1" for="toggle1">
        <div class="topi"></div>
        <div class="meat"></div>
        <div class="bottom"></div>
      </label>
      <nav class="menu1">
        <div
          className="link1"
          style={
            Active == "Home1"
              ? {
                  cursor: "pointer",
                  fontWeight: "700",
                  backgroundColor: "#FFCB11",
                  paddingRight: "50px",
                  color: "white",
                  transition: "all 0.3s ease",
                }
              : { cursor: "pointer", paddingRight: "50px" }
          }
          onClick={() => {
            setnda(false);
            setenroll(false);
            handleScrollTo("home");
            SetActive("Home1");
          }}
        >
          Home
        </div>
        <div
          className="link1"
          style={
            Active == "About us"
              ? {
                  cursor: "pointer",
                  fontWeight: "700",
                  backgroundColor: "#FFCB11",
                  paddingRight: "50px",
                  color: "white",
                  transition: "all 0.3s ease",
                }
              : { cursor: "pointer", paddingRight: "50px" }
          }
          onClick={() => {
            setnda(false);
            setenroll(false);
            handleScrollTo("about");
            SetActive("About us");
          }}
        >
          {" "}
          About
        </div>

        <div
          className="link1"
          style={
            Active == "Registration"
              ? {
                  cursor: "pointer",
                  fontWeight: "700",
                  backgroundColor: "#FFCB11",
                  paddingRight: "50px",
                  color: "white",
                  transition: "all 0.3s ease",
                  position: "relative",
                }
              : {
                  cursor: "pointer",
                  paddingRight: "50px",
                  position: "relative",
                }
          }
          onClick={() => SetActive("Registration")}
        >
          Registration
        </div>

        {/* Mobile dropdown for Registration */}
        <a
          className="mobile-drop"
          style={
            Active == "Registration"
              ? { paddingRight: "50px" }
              : { display: "none" }
          }
          onClick={() => {
            setenroll(true);
            setnda(false);
            handleScrollTo("enroll");
            SetActive("Registration");
          }}
        >
          SSB Registration
        </a>
        <a
          className="mobile-drop"
          style={
            Active == "Registration"
              ? { paddingRight: "50px" }
              : { display: "none" }
          }
          onClick={() => {
            setenroll(true);
            setnda(true);
            handleScrollTo("enroll");
            SetActive("Registration");
          }}
        >
          NDA Registration
        </a>

        <div
          className="link1"
          style={
            Active == "Courses"
              ? {
                  cursor: "pointer",
                  fontWeight: "700",
                  position: "relative",
                  backgroundColor: "#FFCB11",
                  paddingRight: "50px",
                  color: "white",
                  transition: "all 0.3s ease",
                }
              : {
                  cursor: "pointer",
                  position: "relative",
                  paddingRight: "50px",
                }
          }
          onClick={() => {
            SetActive("Courses");
          }}
        >
          Courses
        </div>
        <a
          className="mobile-drop"
          style={
            Active == "Courses" ? { paddingRight: "50px" } : { display: "none" }
          }
          onClick={() =>
            setnda(false) &&
            setenroll(false) &&
            handleScrollTo("home") &&
            SetActive("Home")
          }
        >
          SSB Preparation Course
        </a>
        <a
          className="mobile-drop"
          style={
            Active == "Courses" ? { paddingRight: "50px" } : { display: "none" }
          }
          onClick={() => setnda(true) && setenroll(false)}
        >
          {" "}
          NDA coaching Course
        </a>

        <div
          className="link1"
          style={
            Active == "Eligibilty"
              ? {
                  cursor: "pointer",
                  fontWeight: "700",
                  position: "relative",
                  backgroundColor: "#FFCB11",
                  paddingRight: "50px",
                  color: "white",
                  transition: "all 0.3s ease",
                }
              : {
                  cursor: "pointer",
                  position: "relative",
                  paddingRight: "50px",
                }
          }
          onClick={() => {
            SetActive("Eligibilty");
          }}
        >
          Eligibilty
        </div>
        {/* <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"20px"}}> */}
        <a
          className="mobile-drop"
          style={
            Active == "Eligibilty"
              ? { paddingRight: "50px" }
              : { display: "none" }
          }
          href="https://164.100.158.23/how-to-join.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Indian Army
        </a>
        <a
          className="mobile-drop"
          style={
            Active == "Eligibilty"
              ? { paddingRight: "50px" }
              : { display: "none" }
          }
          href="https://www.joinindiannavy.gov.in/en/entry/entry/eligibilityform"
          target="_blank"
          rel="noopener noreferrer"
        >
          Indian Navy
        </a>
        <a
          className="mobile-drop"
          style={
            Active == "Eligibilty"
              ? { paddingRight: "50px" }
              : { display: "none" }
          }
          href="https://afcat.cdac.in/AFCAT/careerAsPerQualification"
          target="_blank"
          rel="noopener noreferrer"
        >
          Indian Air force
        </a>
        {/* </div> */}
        <div
          className="link1"
          style={
            Active == "Contact us"
              ? {
                  cursor: "pointer",
                  fontWeight: "700",
                  backgroundColor: "#FFCB11",
                  paddingRight: "50px",
                  color: "white",
                  transition: "all 0.3s ease",
                }
              : { cursor: "pointer", paddingRight: "50px" }
          }
          onClick={() => {
            setnda(false);
            setenroll(false);
            handleScrollTo("contact");
            SetActive("Contact us");
          }}
        >
          {" "}
          Contact
        </div>

        {/* <div 
        className="enroll1"
        style={{ cursor: "pointer" }}
        onClick={() => {
          SetActive("Registration");
          setenroll(true);
          handleScrollTo('enroll');
        }}
      >
        Enroll Now
      </div> */}
      </nav>
    </div>
  );
}

export default Navbar;
