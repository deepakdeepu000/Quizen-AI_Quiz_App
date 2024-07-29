import React, { useEffect, useRef, useState } from "react";
import { NeatConfig, NeatGradient } from "@firecms/neat";

// // import React, { useState } from 'react';
// // import { Form, Button } from 'react-bootstrap';
// // import './example.css';

// // const StudentDetails = () => {
// //   const [firstName, setFirstName] = useState('');
// //   const [lastName, setLastName] = useState('');
// //   const [gender, setGender] = useState('');
// //   const [phoneNumber, setPhoneNumber] = useState('');
// //   const [organizationName, setOrganizationName] = useState('');
// //   const [organizationAddress, setOrganizationAddress] = useState('');
// //   const [branch, setBranch] = useState('');
// //   const [stream, setStream] = useState('');

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Handle form submission here
// //   };

// //   return (
// //     <Form onSubmit={handleSubmit} className="student-details-form">
// //       <Form.Group controlId="firstName">
// //         <Form.Label>First Name</Form.Label>
// //         <Form.Control
// //           type="text"
// //           placeholder="Enter first name"
// //           value={firstName}
// //           onChange={(e) => setFirstName(e.target.value)}
// //           className="student-details-form-input"
// //         />
// //       </Form.Group>

// //       <Form.Group controlId="lastName">
// //         <Form.Label>Last Name</Form.Label>
// //         <Form.Control
// //           type="text"
// //           placeholder="Enter last name"
// //           value={lastName}
// //           onChange={(e) => setLastName(e.target.value)}
// //           className="student-details-form-input"
// //         />
// //       </Form.Group>

// //       <Form.Group controlId="gender">
// //         <Form.Label>Gender</Form.Label>
// //         <Form.Control
// //           as="select"
// //           value={gender}
// //           onChange={(e) => setGender(e.target.value)}
// //           className="student-details-form-input"
// //         >
// //           <option value="">Select gender</option>
// //           <option value="male">Male</option>
// //           <option value="female">Female</option>
// //           <option value="other">Other</option>
// //         </Form.Control>
// //       </Form.Group>

// //       <Form.Group controlId="phoneNumber">
// //         <Form.Label>Phone Number</Form.Label>
// //         <Form.Control
// //           type="text"
// //           placeholder="Enter phone number"
// //           value={phoneNumber}
// //           onChange={(e) => setPhoneNumber(e.target.value)}
// //           className="student-details-form-input"
// //         />
// //       </Form.Group>

// //       <Form.Group controlId="organizationName">
// //         <Form.Label>Organization Name</Form.Label>
// //         <Form.Control
// //           type="text"
// //           placeholder="Enter organization name"
// //           value={organizationName}
// //           onChange={(e) => setOrganizationName(e.target.value)}
// //           className="student-details-form-input"
// //         />
// //       </Form.Group>

// //       <Form.Group controlId="organizationAddress">
// //         <Form.Label>Organization Address</Form.Label>
// //         <Form.Control
// //           type="text"
// //           placeholder="Enter organization address"
// //           value={organizationAddress}
// //           onChange={(e) => setOrganizationAddress(e.target.value)}
// //           className="student-details-form-input"
// //         />
// //       </Form.Group>

// //       <Form.Group controlId="branch">
// //         <Form.Label>Branch</Form.Label>
// //         <Form.Control
// //           type="text"
// //           placeholder="Enter branch"
// //           value={branch}
// //           onChange={(e) => setBranch(e.target.value)}
// //           className="student-details-form-input"
// //         />
// //       </Form.Group>

// //       <Form.Group controlId="stream">
// //         <Form.Label>Stream</Form.Label>
// //         <Form.Control
// //           type="text"
// //           placeholder="Enter stream"
// //           value={stream}
// //           onChange={(e) => setStream(e.target.value)}
// //           className="student-details-form-input"
// //         />
// //       </Form.Group>

// //       <Button variant="primary" type="submit" className="student-details-form-button">
// //         Submit
// //       </Button>
// //     </Form>
// //   );
// // };

// // export default StudentDetails;
// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import PhoneInput from 'react-phone-number-input';
// import 'react-phone-number-input/style.css';
// import './example.css';

// const StudentDetails = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [gender, setGender] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [organizationName, setOrganizationName] = useState('');
//   const [organizationAddress, setOrganizationAddress] = useState('');
//   const [branch, setBranch] = useState('');
//   const [stream, setStream] = useState('');

//   const handlePhoneNumberChange = (value) => {
//     setPhoneNumber(value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//   };

//   return (
//     <React.Fragment >
//       <div className = "form-container">
//     <Form onSubmit={handleSubmit} className="student-details-form">
//       <Form.Group controlId="firstName">
//         <Form.Label>First Name</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter first name"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//       </Form.Group>

//       <Form.Group controlId="lastName">
//         <Form.Label>Last Name</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter last name"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//         />
//       </Form.Group>

//       <Form.Group controlId="gender">
//         <Form.Label>Gender</Form.Label>
//         <Form.Control
//           as="select"
//           value={gender}
//           onChange={(e) => setGender(e.target.value)}
//         >
//           <option value="">Select gender</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//           <option value="other">Other</option>
//         </Form.Control>
//       </Form.Group>

//       <Form.Group controlId="phoneNumber">
//         <Form.Label>Phone Number</Form.Label>
//         <PhoneInput
//           international
//           defaultCountry="US"
//           value={phoneNumber}
//           onChange={handlePhoneNumberChange}
//         />
//       </Form.Group>

//       <Form.Group controlId="organizationName">
//         <Form.Label>Organization Name</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter organization name"
//           value={organizationName}
//           onChange={(e) => setOrganizationName(e.target.value)}
//         />
//       </Form.Group>

//       <Form.Group controlId="organizationAddress">
//         <Form.Label>Organization Address</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter organization address"
//           value={organizationAddress}
//           onChange={(e) => setOrganizationAddress(e.target.value)}
//         />
//       </Form.Group>

//       <Form.Group controlId="branch">
//         <Form.Label>Branch</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter branch"
//           value={branch}
//           onChange={(e) => setBranch(e.target.value)}
//         />
//       </Form.Group>

//       <Form.Group controlId="stream">
//         <Form.Label>Stream</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter stream"
//           value={stream}
//           onChange={(e) => setStream(e.target.value)}
//         />
//       </Form.Group>

//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//     </div>
//     </React.Fragment>
//   );
// };

// export default StudentDetails;


// import React from 'react';
// import './example.css';

// function CustomerSupportPage() {
//   return (
//     <div className="customer-support-page">
//       {/* Header */}
//       <header>
//         <h1>Simplify your customer support</h1>
//       </header>

//       {/* Subheading */}
//       <div className="subheading">
//         <p>
//           Easy-to-use ticketing software that makes it easy to offer excellent customer service. Test it out completely for free.
//         </p>
//       </div>

//       {/* Features Section */}
//       <section className="features">
//         <ul>
//           <li>
//             <input type="checkbox" id="free-trial" />
//             <label htmlFor="free-trial">Free-day trial</label>
//           </li>
//           <li>
//             <input type="checkbox" id="ready-automations" />
//             <label htmlFor="ready-automations">Ready automations</label>
//           </li>
//           <li>
//             <input type="checkbox" id="simple-setup" />
//             <label htmlFor="simple-setup">Simple setup</label>
//           </li>
//         </ul>
//       </section>

//       {/* Customer Logos */}
//       <section className="customer-logos">
//         <img src="brastel-logo.svg" alt="Brastel logo" />
//         <img src="bitvavo-logo.svg" alt="Bitvavo logo" />
//         <img src="cerivile-logo.svg" alt="Cerivile logo" />
//       </section>

//       {/* Call to Action */}
//       <div className="call-to-action">
//         <button>Sign up free</button>
//         <p>You'll be in good company</p>
//       </div>
//     </div>
//   );
// }

// export default CustomerSupportPage;


// client/src/App.js

// import React, { useState, useEffect } from 'react';
import {  Form, Button, ListGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import io from 'socket.io-client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const socket = io('http://localhost:3001');

// function Example() {
//   const [roomId, setRoomId] = useState('');
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     socket.on('message', (msg) => {
//       setMessages((prevMessages) => [...prevMessages, msg]);
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   const handleJoinRoom = () => {
//     socket.emit('joinRoom', roomId);
//   };

//   const handleSendMessage = () => {
//     if (message.trim() !== '') {
//       socket.emit('chatMessage', roomId, message);
//       setMessage('');
//     }
//   };

//   return (

//     <Container className="App">
//       <main className="main-content">
//         <section className="hero">
//           <Row>
//             <Col xs={12} md={6}>
//               <h2>Video calls and meetings for everyone</h2>
//             </Col>
//             <Col xs={12} md={6}>
//               <p>
//                 Google Meet provides secure, easy-to-use video calls and meetings for everyone, on any device.
//               </p>
//             </Col>
//           </Row>
//         </section>
//         <section className="join">
//           <Row>
//             <Col xs={12}>
//               <Button variant="primary" className="join-button" size="lg">
//                 New meeting
//               </Button>
//             </Col>
//             <Col>
//               <Form.Group>
//                 <Form.Label>Enter a code or link</Form.Label>
//                 <Form.Control
//                   type="text"
//                   value={roomId}
//                   onChange={(e) => setRoomId(e.target.value)}
//                 />
//               </Form.Group>
//               <Button
//                 variant="primary"
//                 onClick={handleJoinRoom}
//                 className="join-button"
//               >
//                 Join
//               </Button>
//             </Col>
//           </Row>
//         </section>
//       </main>
//     </Container>
//   );
// }



// export default Example;
// import './example.css';
// import { faEye, faEyeSlash  } from '@fortawesome/free-solid-svg-icons';

// const Example = () => {
//   const [password, setPassword] = useState('');
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible(!isPasswordVisible);
//   };

//   return (

//         <div className="password-wrapper position-relative d-inline-block">
//           <input
//             type={isPasswordVisible ? 'text' : 'password'}
//             id="password"
//             className="form-control"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button
//             type="button"
//             className="btn position-absolute top-50 end-0 translate-middle-y"
//             onClick={togglePasswordVisibility}
//           >
//             <FontAwesomeIcon className="password-icon" icon={isPasswordVisible ? faEyeSlash : faEye} ></FontAwesomeIcon>
//           </button>
//         </div>
      
//   );
// };

// export default Example;

import './example.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleProfileDropdown = () => setProfileDropdownOpen(!profileDropdownOpen);

  return (
    <nav className="nav">
      <div className="nav-left">
        <a href="#" className="nav-brand">
          <img src="./assets/logo-1.png" alt="UIVerse Logo" />
        </a>

        <ul className="nav-menu">
          <li>
            <div className="dropdown-container-k" onClick={toggleDropdown}>
              <a href="#" className="nav-link">
                Elements
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path fill="#F2F2F2" d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
                </svg>
              </a>
              {dropdownOpen && (
                <div className="dropdown-menu grid">
                  <a href="#"><span>All</span></a>
                  <a href="#"><span>Buttons</span><span>1434</span></a>
                  <a href="#"><span>Checkboxes</span><span>189</span></a>
                  <a href="#"><span>Toggle switches</span><span>293</span></a>
                  <a href="#"><span>Cards</span><span>794</span></a>
                  <a href="#"><span>Loaders</span><span>801</span></a>
                  <a href="#"><span>Inputs</span><span>213</span></a>
                  <a href="#"><span>Radio buttons</span><span>111</span></a>
                  <a href="#"><span>Forms</span><span>199</span></a>
                  <a href="#"><span>Patterns</span><span>132</span></a>
                  <a href="#"><span>Tooltips</span><span>71</span></a>
                  <a href="#">
                    <span>My favorites</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="16" height="16">
                      <path d="M5 9c0-1.861 0-2.792.245-3.545a5 5 0 0 1 3.21-3.21C9.208 2 10.139 2 12 2s2.792 0 3.545.245a5 5 0 0 1 3.21 3.21C19 6.208 19 7.139 19 9v13l-1.794-1.537c-1.848-1.584-2.771-2.376-3.808-2.678a5 5 0 0 0-2.796 0c-1.037.302-1.96 1.094-3.808 2.678L5 22V9Z" stroke="#9ca3af" fill="none" stroke-width="2px"></path>
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </li>
          <li>
            <a href="#" className="nav-link">Challenges</a>
          </li>
          <li>
            <a href="#" className="nav-link">Spotlight</a>
          </li>
        </ul>
      </div>

      <div className="nav-right">
        <a href="#" className="nav-link btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M12 19v-7m0 0V5m0 7H5m7 0h7" stroke="#F2F2F2" fill="none" stroke-width="2px"></path>
          </svg>
          Create
        </a>

        <button className="nav-link btn-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M9 18.542a62.872 62.872 0 0 1-3.94-.313 1.676 1.676 0 0 1-1.404-2.195c.171-.513.343-1.018.389-1.561l.375-4.497a7.608 7.608 0 0 1 15.162 0l.375 4.499c.045.543.217 1.048.388 1.56a1.675 1.675 0 0 1-1.405 2.194c-1.31.145-2.624.25-3.94.313m-6 0V19a3 3 0 1 0 6 0v-.459m-6 0a62.83 62.83 0 0 0 6 0" stroke="#F2F2F2" fill="none" stroke-width="2px"></path>
          </svg>
        </button>
        <div className="dropdown-container-k" onClick={toggleProfileDropdown}>
          <a href="#" className="nav-link btn-profile">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path fill="#F2F2F2" d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"></path>
            </svg>
            <span>parthwebdev</span>
            <div className="profile-pic">
              <img src="./assets/profile-pic.jpg" alt="Profile Pic" />
            </div>
          </a>
          {profileDropdownOpen && (
            <div className="dropdown-menu profile-dropdown">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path fill="#D1D5DB" d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                </svg>
                <span>Your Profile</span>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path fill="#D1D5DB" d="M10 3h4a8 8 0 1 1 0 16v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8zm2 14h2a6 6 0 1 0 0-12h-4a6 6 0 0 0-6 6c0 3.61 2.462 5.966 8 8.48V17z"></path>
                </svg>
                <span>Send Feedback</span>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16.363636363636363" viewBox="0 0 33 27" fill="none">
                  <path d="M27.9541 2.81323C25.818 1.81378 23.5339 1.08742 21.146 0.673828C20.8527 1.20404 20.5101 1.91719 20.2739 2.4845C17.7354 2.10275 15.2203 2.10275 12.7286 2.4845C12.4924 1.91719 12.142 1.20404 11.8461 0.673828C9.45561 1.08742 7.16891 1.81645 5.03277 2.81853C0.724134 9.32943 -0.443865 15.6786 0.140135 21.9377C2.99785 24.0717 5.76731 25.3681 8.49004 26.2164C9.1623 25.2912 9.76186 24.3077 10.2784 23.2711C9.29466 22.8973 8.35248 22.4361 7.46223 21.9006C7.69841 21.7256 7.92943 21.5426 8.15262 21.3544C13.5825 23.8941 19.4822 23.8941 24.8473 21.3544C25.0731 21.5426 25.3041 21.7256 25.5377 21.9006C24.6448 22.4387 23.7 22.9 22.7163 23.2738C23.2328 24.3077 23.8298 25.2939 24.5046 26.219C27.23 25.3707 30.002 24.0744 32.8597 21.9377C33.545 14.6818 31.6892 8.39096 27.9541 2.81323ZM11.0181 18.0884C9.38812 18.0884 8.05138 16.5667 8.05138 14.7136C8.05138 12.8606 9.35957 11.3363 11.0181 11.3363C12.6767 11.3363 14.0134 12.8579 13.9848 14.7136C13.9874 16.5667 12.6767 18.0884 11.0181 18.0884ZM21.9818 18.0884C20.3518 18.0884 19.015 16.5667 19.015 14.7136C19.015 12.8606 20.3232 11.3363 21.9818 11.3363C23.6403 11.3363 24.977 12.8579 24.9485 14.7136C24.9485 16.5667 23.6403 18.0884 21.9818 18.0884Z" fill="#FFFFFF"></path>
                </svg>
                <span>Join Discord</span>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="20" height="20">
                  <path d="M18.189 9a15 15 0 0 1 2.654 2.556c.105.13.157.287.157.444m-2.811 3a14.998 14.998 0 0 0 2.654-2.556A.704.704 0 0 0 21 12m0 0H8m5-7.472A6 6 0 0 0 3 9v6a6 6 0 0 0 10 4.472" stroke="#D1D5DB" fill="none" stroke-width="2px"></path>
                </svg>
                <span>Log out</span>
              </a>
            </div>
          )}
        </div>

        <div className="menu-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 block" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="24" height="24">
            <path d="M4 12h16M4 18h16M4 6h16" stroke="#D1D5DB" fill="none" stroke-width="2px"></path>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
