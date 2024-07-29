// import React, { useState } from 'react';
// import { Form, Button , Alert} from 'react-bootstrap';
// import PhoneInput from 'react-phone-number-input';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// import 'react-phone-number-input/style.css';
// import './Student_details.css';

// const StudentDetails = () => {
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [gender, setGender] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [organizationName, setOrganizationName] = useState('');
//     const [organizationAddress, setOrganizationAddress] = useState('');
//     const [branch, setBranch] = useState('');
//     const [stream, setStream] = useState('');
//     const [submitting, setSubmitting] = useState(false);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();
  
//     const handlePhoneNumberChange = (value) => {
//       setPhoneNumber(value);
//     };
  
//     const validateForm = () => {
//       // Implement validation logic here (e.g., check for empty fields)
//       if (!firstName || !lastName || !phoneNumber) {
//         setError('Please fill in all required fields.');
//         return false;
//       }
//       return true;
//     };
  
//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       if (!validateForm()) return;
  
//       setSubmitting(true);
//       setError(null);
  
//       try {
//         const formData = {
//           firstName,
//           lastName,
//           gender,
//           phoneNumber,
//           organizationName,
//           organizationAddress,
//           branch,
//           stream,
//         };
//         // Send formData to the database for storage
//         // (Replace with your actual logic for sending data)
//         const response = await axios.post('http://localhost:5001/OrgUsers', formData);
//         console.log(response.data);
//         setSubmitting(false);
//         // Handle successful submission (e.g., clear form, redirect)
//         navigate('/TextGeneration')
//       } catch (error) {
//         console.error('Signup failed:', error.message);
//         setError('An error occurred. Please try again later.');
//         setSubmitting(false);
//       }
//     };

//   return (
//     <React.Fragment >
//       <div className = "form-container">
//       <Form onSubmit={handleSubmit} className="student-details-form">
//           {error && <Alert variant="danger">{error}</Alert>}
//           <Form.Group controlId="firstName">
//             <Form.Label>First Name</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter first name"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//               required
//             />
//             </Form.Group>

//       <Form.Group controlId="lastName">
//         <Form.Label>Last Name</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter last name"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//           required
//         />
//       </Form.Group>

//       <Form.Group controlId="gender">
//         <Form.Label>Gender</Form.Label>
//         <Form.Control
//           as="select"
//           value={gender}
//           onChange={(e) => setGender(e.target.value)}
//           required
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
//             required
//         />
//       </Form.Group>

//       <Form.Group controlId="organizationName">
//         <Form.Label>Organization Name</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter organization name"
//           value={organizationName}
//           onChange={(e) => setOrganizationName(e.target.value)}
//           required
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
//           required
//         />
//       </Form.Group>

//       <Form.Group controlId="stream">
//         <Form.Label>Stream</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter stream"
//           value={stream}
//           onChange={(e) => setStream(e.target.value)}
//           required
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

import React, { useEffect, useState , useRef } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Col, InputGroup } from 'react-bootstrap';
import PhoneInput from 'react-phone-number-input';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { NeatConfig, NeatGradient  } from "@firecms/neat";

import 'react-phone-number-input/style.css';
import './Student_details.css';
import { LogBox } from 'react-native';

const StudentDetails  = () => {
  const navigate = useNavigate();


  const validationSchema = yup.object().shape({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    username: yup.string().required('Username is required'),
    gender: yup.string().required('Gender is required'),
    phoneNumber: yup.string().required('Phone number is required'),
    organizationName: yup.string().required('Organization name is required'),
    organizationAddress: yup.string().required('Organization address is required'),
    branch: yup.string().required('Branch is required'),
    stream: yup.string().required('Stream is required'),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await axios.post('http://localhost:5001/OrgUsers', values);
      console.log(response.data);
      setSubmitting(false);
      navigate('/TextGeneration');
    } catch (error) {
      console.error('Signup failed:', error.message);
      setErrors({ submit: 'An error occurred. Please try again later.' });
      setSubmitting(false);
    }
  };

    // const canvasRef = useRef<HTMLCanvasElement | null>(null);
    // const gradientRef = useRef<NeatGradient | null>(null);
    
    // const bgColor = "my-canvas-bg";

    // useEffect(() => {
        

    //     if (!canvasRef.current)
    //         return;

    //     gradientRef.current = new NeatGradient({
    //         ref: canvasRef.current,
    //         "colors": [
    //             {
    //                 "color": "#FF5373",
    //                 "enabled": true
    //             },
    //             {
    //                 "color": "#FFC858",
    //                 "enabled": true
    //             },
    //             {
    //                 "color": "#05d5ef",
    //                 "enabled": true
    //             },
    //             {
    //                 "color": "#6D3BFF",
    //                 "enabled": true
    //             },
    //             {
    //                 "color": "#f5e1e5",
    //                 "enabled": false
    //             }
    //         ],
    //         "speed": 4,
    //         "horizontalPressure": 4,
    //         "verticalPressure": 5,
    //         "waveFrequencyX": 2,
    //         "waveFrequencyY": 3,
    //         "waveAmplitude": 5,
    //         "shadows": 0,
    //         "highlights": 1,
    //         "colorSaturation":  0,
    //         "colorBrightness":  1,
    //         "wireframe": true,
    //         "colorBlending": 6,
    //         "backgroundAlpha": 0,
    //         "resolution": 1 / 2
    //     });

    //     return gradientRef.current.destroy;

    // }, [canvasRef.current]);

  return (
 
    <div className="form-container">
      {/* <canvas
            style={{
                isolation: "isolate",
                height: "100%",
                width: "100%",
            }}
            ref={canvasRef}
        /> */}
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          username: '',
          gender: '',
          phoneNumber: '',
          organizationName: '',
          organizationAddress: '',
          branch: '',
          stream: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit} className="student-details-form">
            {errors.submit && <Alert variant="danger">{errors.submit}</Alert>}
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isInvalid={touched.firstName && !!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isInvalid={touched.lastName && !!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group  controlId="validationFormikUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend" style = {{height : '100%' , padding : '12px 20px 12px 20px'}}>@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="gender">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                as="select"
                name="gender"
                value={values.gender}
                onChange={handleChange}
                isInvalid={touched.gender && !!errors.gender}
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">{errors.gender}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <PhoneInput
                international
                defaultCountry="US"
                value={values.phoneNumber}
                onChange={(value) => handleChange({ target: { name: 'phoneNumber', value } })}
                className={touched.phoneNumber && !!errors.phoneNumber ? 'is-invalid' : ''}
              />
              {touched.phoneNumber && !!errors.phoneNumber && (
                <div className="invalid-feedback">{errors.phoneNumber}</div>
              )}
            </Form.Group>

            <Form.Group controlId="organizationName">
              <Form.Label>Organization Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter organization name"
                name="organizationName"
                value={values.organizationName}
                onChange={handleChange}
                isInvalid={touched.organizationName && !!errors.organizationName}
              />
              <Form.Control.Feedback type="invalid">{errors.organizationName}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="organizationAddress">
              <Form.Label>Organization Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter organization Place"
                name="organizationAddress"
                value={values.organizationAddress}
                onChange={handleChange}
                isInvalid={touched.organizationAddress && !!errors.organizationAddress}
              />
              <Form.Control.Feedback type="invalid">{errors.organizationAddress}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="branch">
              <Form.Label>Branch</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter branch"
                name="branch"
                value={values.branch}
                onChange={handleChange}
                isInvalid={touched.branch && !!errors.branch}
              />
              <Form.Control.Feedback type="invalid">{errors.branch}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="stream">
              <Form.Label>Stream</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter stream"
                name="stream"
                value={values.stream}
                onChange={handleChange}
                isInvalid={touched.stream && !!errors.stream}
              />
              <Form.Control.Feedback type="invalid">{errors.stream}</Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default StudentDetails;
