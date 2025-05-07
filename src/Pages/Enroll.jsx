import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useCallback, useEffect } from "react";
import useRazorpay from "react-razorpay";
import "../App.css";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import toast, { Toaster } from 'react-hot-toast';
import uppic from "../uppic.jpg"

import emailjs from 'emailjs-com'

// Modal component
const BackDetailsModal = ({ isOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Back Details Modal"
      style={{
        content: {
          width: "90%",
          maxWidth: "400px",
          margin: "auto",
        },
      }}
    >
      <div className="modal-enroll">
        <div className="upi">
          <div
            style={{
              height: "300px",
              width: "300px",
              margin: "auto",
            }}
          >
            <img src={uppic} style={{width:"100%",height:"100%",objectFit:"contain"}} />
          </div>
          <div className="upi-content">UPI Number: 9986345332</div>
        </div>
        <div className="centerLine">
          <span>OR</span>
        </div>
        <div className="bank-detail">
          <div className="bank-detail-title">FOR NEFT OR IMPS</div>
          <div>
          <div className="bank-detail-container">
            <div className="bank-header">Bank Name:</div>
            <div className="bank-content">State Bank Of India</div>
          </div>
          <div className="bank-detail-container">
            <div className="bank-header">Account Number:</div>
            <div className="bank-content">64207216523</div>
          </div>
          <div className="bank-detail-container">
            <div className="bank-header">Branch:</div>
            <div className="bank-content">Seegehalli, Bangalore</div>
          </div>
          <div className="bank-detail-container">
            <div className="bank-header">Bank IFSC CODE:</div>
            <div className="bank-content">SBIN0041030</div>
          </div>
          </div>
        </div>
        <button className="bank-close" onClick={closeModal}>CLOSE</button>
      </div>
    </Modal>
  );
};
function Enroll() {
  const [Razorpay, isLoaded] = useRazorpay();
  const [loaded, setLoaded] = useState(false);
  const [datr, newdat] = useState(null);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [slot, setSlot] = useState("");
  const [registration, setRegistration] = useState("");
  const [module, setModule] = useState("");
  const [serving, setServing] = useState("");
  const [chances, setChances] = useState("");
  const [army, setArmy] = useState("");
  const [navy, setNavy] = useState("");
  const [force, setForce] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  /* Payment status change based on options */
  const [paymentSSb,setPaymentSSb] = useState("Null");

  const closeModal = () => {
    setIsModalOpen(false);
    toast.success('Successfully Registered!');
    // setTimeout(()=>{
    
    //   console.log("hello");
    // },500)
  
  };
  const handleSubmit = () => {
    // Prepare the template parameters
    const templateParams = {
      from_name: Name,
      from_email: Email,
      from_number: number,
      from_city: city,
      from_state: state,
    };

    console.log(templateParams);
    
    // Your EmailJS service ID
    const serviceID = 'service_ok8lzs2';
    // Your EmailJS template ID
    const templateID = 'template_qbrx589';
    // Your EmailJS user ID

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, templateParams,process.env.REACT_APP_API_KEY_EMAIL)
      .then((response) => {
        console.log('Email sent successfully:', response);
        // setIsModalOpen(false); 
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
      });
  };

  function Submit() {
    handleSubmit();
    const formDatab = new FormData();
    formDatab.append("Name", Name);
    formDatab.append("Email", Email);
    formDatab.append("Dob", dob);
    formDatab.append("Number", number);
    formDatab.append("City", city);
    formDatab.append("State", state);
    formDatab.append("Slot", slot);
    formDatab.append("Registration", registration);
    formDatab.append("Module", module);
    formDatab.append("Serving", serving);
    formDatab.append("Chances", chances);
    formDatab.append("Army", army);
    formDatab.append("Navy", navy);
    formDatab.append("Force", force);

    newdat(formDatab);
    fetch(
      "https://script.google.com/macros/s/AKfycbxAMJLduPOn51iSSPw7IorYCJuceAPI4T3DdCtr1dcVDGr-5jWtey8aHBiIzuX-KAfj/exec?function=doPost",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.json())
      .catch((error) => {
        console.log(error);
      });

    setName("");
    setArmy("");
    setEmail("");
    setChances("");
    setCity("");
    setDob("");
    setForce("");
    setModule("");
    setNavy("");
    setNumber("");
    setRegistration("");
    setServing("");
    setSlot("");
    setState("");
  }

  const handlePayment = useCallback((e) => {
    //   const order = await createOrder(params);
    e.preventDefault();
    //   const options = {
    //     key: process.env.REACT_APP_API_KEY_RZP,
    //     amount: "1000000",
    //     currency: "INR",
    //     name: "SSBBULLSEYE",
    //     description: "Test Transaction",
    //     image:
    //       "http://localhost:3000/static/media/Primarygreen.0c9716bab372845eab9732aa01412125.svg",

    //     handler: (res) => {
    //         if (res.razorpay_payment_id) {
    //             // Payment successful, submit the form
    //             setLoaded(true);
    //           } else {
    //             // Payment failed
    //             console.error("Payment failed");
    //           }
    //     },
    //     prefill: {
    //       name: Name,
    //       email: Email,
    //       contact: number,
    //     },
    //     notes: {
    //       address: "Razorpay Corporate Office",
    //     },
    //     theme: {
    //       color: "#3399cc",
    //     },
    //   };

    //   const rzpay = new Razorpay(options);

    //   rzpay.open();
    // },
    // [Razorpay]
    
    Submit();
    setIsModalOpen(true);
    
  
  });
  //   useEffect(()=>{console.log(dob)},[dob]);
  // useEffect(()=>{
  // if(loaded){

  // }
  // },[loaded])
  return (
    <>
    <Toaster></Toaster>
      <BackDetailsModal isOpen={isModalOpen} closeModal={closeModal} />
      <div className="Enroll-page" id="enroll">
        <div className="Enroll-heading">Enroll now</div>
        <form
          onSubmit={(e) => {
            handlePayment(e);
          }}
          className="form-container-en"
        >
          <fieldset className="fieldset">
            <legend>Entry Applied For*</legend>
            <label htmlFor="Indian-army" className="form-group">
              Indian Army
              <select
                id="ssbarmy"
                name="ssbarmy"
                class="form-control"
                value={army}
                onChange={(e) => {
                  setArmy(e.target.value);
                }}
                required
              >
                <option value="0"> Select Type of Entry </option>
                <option value="NDA">NDA</option>
                <option value="10+2 TES">10+2 TES</option>
                <option value="IMA">IMA</option>
                <option value="OTA SSC (NON TECH)">OTA SSC (NON TECH)</option>
                <option value="OTA SSC (JAG)">OTA SSC (JAG)</option>
                <option value="SSC (NCC SPL)">SSC (NCC SPL)</option>
                <option value="UES">UES</option>
                <option value="TGC">TGC</option>
                <option value="OTA SSC TECH">OTA SSC TECH</option>
                <option value="AEC">AEC</option>
                <option value="ACC">ACC</option>
                <option value="PC (SL)">PC (SL)</option>
                <option value="SCO">SCO</option>
                <option value="TA">TA</option>
                <option value="RVC">RVC</option>
                <option value="AMC (NT)">AMC (NT)</option>
                <option value="APS">APS</option>
                <option value="SSC (NT) WOMEN">SSC (NT) WOMEN</option>
                <option value="SSCW (NCC)">SSCW (NCC)</option>
                <option value="SSCW (JAG)">SSCW (JAG)</option>
                <option value="SSC TECH (WOMEN)">SSC TECH (WOMEN)</option>
              </select>
            </label>
            <label htmlFor="Indian-army" className="form-group">
              Indian Navy
              <select
                id="ssbarmy"
                name="ssbarmy"
                class="form-control"
                value={navy}
                onChange={(e) => {
                  setNavy(e.target.value);
                }}
                required
              >
                <option value="0"> Select Type of Entry </option>
                <option value="NDA">NDA</option>
                <option value="10+2 TES">10+2 TES</option>
                <option value="IMA">IMA</option>
                <option value="OTA SSC (NON TECH)">OTA SSC (NON TECH)</option>
                <option value="OTA SSC (JAG)">OTA SSC (JAG)</option>
                <option value="SSC (NCC SPL)">SSC (NCC SPL)</option>
                <option value="UES">UES</option>
                <option value="TGC">TGC</option>
                <option value="OTA SSC TECH">OTA SSC TECH</option>
                <option value="AEC">AEC</option>
                <option value="ACC">ACC</option>
                <option value="PC (SL)">PC (SL)</option>
                <option value="SCO">SCO</option>
                <option value="TA">TA</option>
                <option value="RVC">RVC</option>
                <option value="AMC (NT)">AMC (NT)</option>
                <option value="APS">APS</option>
                <option value="SSC (NT) WOMEN">SSC (NT) WOMEN</option>
                <option value="SSCW (NCC)">SSCW (NCC)</option>
                <option value="SSCW (JAG)">SSCW (JAG)</option>
                <option value="SSC TECH (WOMEN)">SSC TECH (WOMEN)</option>
              </select>
            </label>
            <label htmlFor="Indian-army" className="form-group">
              Indian Air Force
              <select
                id="ssbarmy"
                name="ssbarmy"
                class="form-control"
                value={force}
                onChange={(e) => {
                  setForce(e.target.value);
                }}
                required
              >
                <option value="0"> Select Type of Entry </option>
                <option value="NDA">NDA</option>
                <option value="10+2 TES">10+2 TES</option>
                <option value="IMA">IMA</option>
                <option value="OTA SSC (NON TECH)">OTA SSC (NON TECH)</option>
                <option value="OTA SSC (JAG)">OTA SSC (JAG)</option>
                <option value="SSC (NCC SPL)">SSC (NCC SPL)</option>
                <option value="UES">UES</option>
                <option value="TGC">TGC</option>
                <option value="OTA SSC TECH">OTA SSC TECH</option>
                <option value="AEC">AEC</option>
                <option value="ACC">ACC</option>
                <option value="PC (SL)">PC (SL)</option>
                <option value="SCO">SCO</option>
                <option value="TA">TA</option>
                <option value="RVC">RVC</option>
                <option value="AMC (NT)">AMC (NT)</option>
                <option value="APS">APS</option>
                <option value="SSC (NT) WOMEN">SSC (NT) WOMEN</option>
                <option value="SSCW (NCC)">SSCW (NCC)</option>
                <option value="SSCW (JAG)">SSCW (JAG)</option>
                <option value="SSC TECH (WOMEN)">SSC TECH (WOMEN)</option>
              </select>
            </label>
          </fieldset>

          <div class="form-group">
            <label>
              SSB Chances Availed <small>*</small>
            </label>
            <select
              id="ssbchances"
              name="ssbchances"
              class="form-control"
              value={chances}
              onChange={(e) => {
                setChances(e.target.value);
              }}
              required
            >
              <option value=""> Select Number of Chances </option>
              <option value="0"> 0 </option>
              <option value="1"> 1 </option>
              <option value="2"> 2 </option>
              <option value="3"> 3 </option>
              <option value="4"> 4 </option>
              <option value="5"> 5 </option>
              <option value="6"> 6 </option>
              <option value="7"> 7 </option>
              <option value="8"> 8 </option>
              <option value="9"> 9 </option>
              <option value="10"> 10 </option>
              <option value="11"> 11 </option>
              <option value="12"> 12 </option>
              <option value="13"> 13 </option>
              <option value="14"> 14 </option>
              <option value="15"> 15 </option>
            </select>
          </div>
          <div class="form-group">
            <label>
              Presently serving in Army/Navy/Airforce<small>*</small>
            </label>
            <select
              id="servicemen"
              name="servicemen"
              class="form-control"
              value={serving}
              onChange={(e) => {
                setServing(e.target.value);
              }}
              required
            >
              <option value="">Select anyone</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div class="form-group">
            <label>
              Training Module Required<small>*</small>
            </label>
            <select
              name="modules"
              id="modules"
              class="form-control"
              value={module}
              onChange={(e) => {
                setModule(e.target.value);
              }}
              required
            >
              <option value="">Select Module</option>
              <option value="Composite">Composite</option>
            </select>{" "}
          </div>
          <div class="form-group">
            <label>
              Registration Type<small>*</small>
            </label>
            <select
              name="type"
              id="type"
              class="form-control"
              value={registration}
              onChange={(e) => {
                setRegistration(e.target.value);
                if(e.target.value == "One on One")
                setPaymentSSb("18000")
                else
                setPaymentSSb("12000")
              }}
              required
            >
              <option value="">Select Type</option>
              <option value="Regular Batch (Max 10 Candidates)">
                {/* Batch 1 Registration ( 2-6 Candidates ) */}
                Regular Batch (Max 10 Candidates)
              </option>
              <option value="One on One">
                {/* Batch 2 Registration ( 7-11 Candidates ) */}
                One on One
              </option>
              {/* <option value="Batch 3 Registration ( 12-16 Candidates )">
                Batch 3 Registration ( 12-16 Candidates )
              </option> */}
            </select>{" "}
          </div>
          <div class="form-group">
            <label>
              Slot Training<small>*</small>
            </label>
            <select
              id="stime"
              name="stime"
              class="form-control required"
              value={slot}
              onChange={(e) => {
                setSlot(e.target.value);
              }}
              required
            >
              <option value=""> Select Slot Timing</option>
              <option value="07:00 AM - 09:00 AM">07:00 AM - 09:00 AM</option>
              <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
              <option value="07:00 PM - 09:00 PM">07:00 PM - 09:00 PM</option>
            </select>
          </div>
          <div class="form-group">
            <label>
              Full Name <small>*</small>
            </label>
            <input
              name="name"
              id="name"
              class="form-control"
              type="text"
              placeholder="Enter First Name &amp; Last Name"
              pattern="[A-Za-z]+( [A-Za-z]+)*"
              value={Name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </div>
          <div class="form-group">
            <label>
              Email Address<small>*</small>
            </label>
            <input
              name="email"
              id="email"
              class="form-control"
              type="text"
              placeholder="username@domainname.com"
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>
          <div class="form-group">
            <label>
              Date of Birth <small>*</small>
            </label>
            <input
              name="dob"
              id="dob"
              class="form-control"
              type="date"
              placeholder="Enter Date of birth [26-02-1987]"
              value={dob}
              onChange={(e) => {
                setDob(e.target.value);
              }}
              //   pattern="^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$"
              required
            />
          </div>
          <div class="form-group">
            <label>
              Whatsapp Number<small>*</small>
            </label>
            <input
              name="phone"
              id="phone"
              class="form-control"
              type="text"
              placeholder="Enter Whatsapp No [9000XXXXXX]"
              pattern="[0-9]{10}"
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
              required
            />
          </div>
          <div class="form-group">
            <label>
              Village / City / District <small>*</small>
            </label>
            <input
              name="address"
              id="address"
              class="form-control"
              type="text"
              placeholder="Village / City / District"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              required
            />
          </div>
          <div class="form-group">
            <label>
              State / Union Territory<small>*</small>
            </label>
            <select
              name="state"
              id="state"
              class="form-control"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
              required
            >
              <option value="">Select State</option>
              <option value="Andaman and Nicobar Islands">
                Andaman and Nicobar Islands
              </option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Dadra &amp; Nagar Haveli">
                Dadra &amp; Nagar Haveli
              </option>
              <option value="Damn and Diu">Damn and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu &amp; Kashmir">Jammu &amp; Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Orissa">Orissa</option>
              <option value="Pondicherry">Pondicherry</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>
          <div class="form-group">
            <label>
              Total Amount to be Paid <small>*</small>
            </label>
            <input
              name="amount"
              id="amount"
              class="form-control"
              type="text"
              placeholder={paymentSSb}
              readonly=""
            />
          </div>
          <div class="form-group">
            <input
              style={{ marginBottom: "20px", cursor: "pointer" }}
              type="submit"
              id="submit"
              name="submit"
              value="Pay Now"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Enroll;
