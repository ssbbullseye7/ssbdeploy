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
function NdaEnroll() {
  const [Razorpay, isLoaded] = useRazorpay();
  const [loaded, setLoaded] = useState(false);
  const [datr, newdat] = useState(null);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [number, setNumber] = useState("");
  // const [slot, setSlot] = useState("");
  const[appliedfor,setAppliedfor] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address,setAddress] = useState("")
  const [courseChoice,setCourseChoice] = useState("3 months")
  const [paymentNda,setPaymentNda] = useState("12000");

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
      from_address: address,
    };

    
    
    // Your EmailJS service ID
    const serviceID = 'service_ok8lzs2';
    // Your EmailJS template ID
    const templateID = 'template_qbrx589';
    // Your EmailJS user ID

    // Send email using EmailJS
    console.log(process.env.REACT_APP_API_KEY_EMAIL,"dwmkdmw");
    
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
    formDatab.append("Applied_for", appliedfor);
    formDatab.append("Address",address);
    // formDatab.append("Slot", slot);
    

    newdat(formDatab);
    fetch(
      // "https://script.google.com/macros/s/AKfycbyfFhOwc_--JaCzah4oZn9jSzfGkBXAbG-ZYaorzdoQeVgekeyjcG6oHAFZrpCYg47j/exec",
       "https://script.google.com/macros/s/AKfycbwj76tZa2nKlySrKo-eqqzr9OfrCog39h_2qVE89gutBvst01BJgaQ6uh3v7U3xUwtg/exec",
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
    setEmail("");
    setAppliedfor("");
    setNumber("");
    // setSlot("");
    setDob("");
    setAddress("")
  
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
            <select 
                id= "applyingfor" 
                name="Applying for" 
                class="form-control"
                value={appliedfor}
                onChange={(e) => {
                  setAppliedfor(e.target.value);
                }}
                required
                >
              <option value="">-- Select an option --</option>
              <option value="Indian Army">Indian Army</option>
              <option value="Indian Navy">Indian Navy</option>
              <option value="Indian Air Force">Indian Air Force</option>
            </select>
          </fieldset>

          

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
              Address <small>*</small>
            </label>
            <input
              name="address"
              id="address"
              class="form-control"
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              required
            />
          </div>
          <div class="form-group">
            <label>
              Courses<small>*</small>
            </label>
            <select
              name="courses"
              id="courses"
              class="form-control"
              value={courseChoice}
              onChange={(e) => {
                setCourseChoice(e.target.value);
                if(e.target.value === "3 Months"){
                  setPaymentNda("12000")
                }else if (e.target.value === "Inaugration"){
                  setPaymentNda("9000")

                }else{
                  setPaymentNda("20000")
                }
              }}
              required
            >
              <option value="3 Months">3 Months</option>
              <option value="6 Months">6 Months</option>
              <option value="Inaugration">Discounted Inaugration Batch</option>
            </select>{" "}
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
              placeholder={paymentNda}
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

export default NdaEnroll;
