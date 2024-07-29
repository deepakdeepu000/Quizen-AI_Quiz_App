// import Form from 'react-bootstrap/form';    
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import {Row , Col} from 'react-bootstrap';
// import { useState , useEffect} from "react";
// import axios from "axios";
// import Container from 'react-bootstrap/esm/Container';

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Button from 'react-bootstrap/Button';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';

// const topics = [
//     { label: "Select Your Technology", value: "Select Your Technology" },
//     { label: "AWS", value: "aws" },
//     { label: "Flutter", value: "flutter" },
//     { label: "Azure", value: "azure" },
//     { label: "Cloud Computing", value: "cloud-computing" },
//     { label: "Google Cloud", value: "google-cloud" },
//     { label: "Red Hat", value: "red-hat" },
//     { label: "Full-stack Development", value: "full-stack-development" },
//     { label: "Gaming/Unity", value: "gaming-unity" },
//     { label: "AR/VR Technology", value: "ar-vr-technology" },
//     { label: "Salesforce", value: "salesforce" },
//     { label: "AI", value: "ai" },
//     { label: "Deep Learning", value: "deep-learning" },
//     { label: "HTML", value: "html" },
//     { label: "CSS", value: "css" },
//     { label: "C++", value: "c++" },
// ];

// function ContainerFluidBreak() {
//   return (
//     <Container fluid="md">
//        <Row className="g-2">
//         <Col md>
//         <FloatingLabel
//             controlId="floatingSelectGrid"
//             label="Works with selects"
//             >
//             <Form.Select aria-label="Floating label select example">
//             {topics.map((topic) => (
//                 <option key={topic.value} value={topic.value}>{topic.label}</option>
//             ))}
//             </Form.Select>
//             </FloatingLabel>
//         </Col>
//         <Col md>
//             <FloatingLabel controlId="floatingInputGrid" label="Email address">
//             <Form.Control type="email" placeholder="name@example.com" />
//             </FloatingLabel>
//         </Col>
//     </Row>
//     <InputGroup>
//             <Form.Control
//             placeholder="Recipient's username"
//             aria-label="Recipient's username with two button addons"
//             />
//             <Button variant="outline-secondary">Confirm</Button>
//             <Button variant="outline-secondary">Change</Button>
//     </InputGroup>
//     <Form.Select aria-label="Default select example">
//       <option>Select Difficulty</option>
//       <option value="1">Easy</option>
//       <option value="2">Medium</option>
//       <option value="3">Hard</option>
//     </Form.Select>
//     </Container>
//   );
// }

// export default ContainerFluidBreak;

// export default function AddProduct() {
//   const [resume, setResume] = useState(null);
//   const [extractedText, setExtractedText] = useState(null);
//   const [skills, setSkills] = useState([]);
//   const [projects, setProjects] = useState([]);
//   const [extracted, setExtracted] = useState(false);
//   const [items, setItems] = useState([]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Create a new FormData object
//     const formData = new FormData();

//     // Append the resume file to the form data
//     formData.append("resume", resume);

//     try {
//       // Send a POST request to the server to upload the resume
//       const response = await axios.post("http://localhost:5000/uploadResume", formData);

//       const {extractedText} = response.data;

//       setExtractedText(extractedText);
//       console.log("extracted text;",extractedText);

//       // Handle skills and projects extraction
//       const {skills, projects } = extractedText;
  
//       // Set the extracted skills and projects in the state
//       setSkills(skills);
//       console.log("skills:",skills);
  
//       // Map over the extracted projects to adjust the structure
//       const formattedProjects = projects.map(project => ({
//         projectName: project.projectName,
//         description: project.description,
//         technologies: project.technologies
//       }));
  
//       // Set the formatted projects in the state
//       setProjects(formattedProjects);
//       setExtracted(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     if (skills.length > 0) {
//       // Create items list from extracted data
//       const newItems = skills.map((skill, index) => ({
//         key: index,
//         skill,
//         imgurl: `/Skills/${skill}.jpeg`,
//       }));
//       setItems(newItems);
//     }
//   }, [skills.length]);

//   console.log("items:",items);

//   return (
//     <>
//  <Container>
//   {/* Container for resume upload form */}
//   <Form
//     onSubmit={handleSubmit}
//     action="/addproducts"
//     encType={"multipart/form-data"}
//     className="container d-flex justify-content-center"
//   >
//     <Form.Group controlId="formFile" className="mb-3">
//       <Form.Label>Please add resume here</Form.Label>
//       <Form.Control
//         onChange={(e) => {
//           setResume(e.target.files[0]);
//         }}
//         name="resume"
//         type="file"
//         accept=".pdf,.doc,.docx"
//       />
//     </Form.Group>
//     <Card style={{ width: "23rem" }}>
//       <Card.Body>
//         <Card.Title>Product Form</Card.Title>
//         <Button type="submit" variant="primary">
//           Submit
//         </Button>
//       </Card.Body>
//     </Card>
//   </Form>
// </Container>

// <Container>
//   {/* Container for displaying extracted skills and projects */}
//   {extractedText && (
//     <div>
//       <h5>Extracted Skills:</h5>
//       <Row >
//         {items.map(item => (
//           <Col key={item.key} md={4}>
//             <Card style={{ width: '18rem' }}>
//               <Card.Img  variant="top" src={item.imgurl} />
//               <Card.Body>
//                 <Card.Title>Skill: {item.skill}</Card.Title>
//                 <Button variant="success" onClick={() => console.log(item.Skill)}>Take Test</Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//       <h5>Extracted Projects:</h5>
//       <Row>
//         {projects.map((project, index) => (
//           <Col key={index} md={4}>
//             <Card>
//               <Card.Body>
//                 <Card.Title>Project Name: {project.projectName}</Card.Title>
//                 <Card.Text>
//                   <strong>Description:</strong> {project.description}
//                 </Card.Text>
//                 <Card.Text>
//                   <strong>Technologies:</strong> {project.technologies.join(", ")}
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   )}
// </Container>

//     </>
//   );
// }


import React from 'react';
import { Modal, Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';


const CenteredModal = ({ showModal, onHide, isLoading  , BoolSkills}) => {
  let props = { showModal, onHide, isLoading , BoolSkills };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={showModal}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        {BoolSkills ? (<Modal.Title id="contained-modal-title-vcenter">
          Generating Questions...
        </Modal.Title>) : (<Modal.Title id="contained-modal-title-vcenter">
          Upload Resume to enable test
          </Modal.Title>
        )}
      </Modal.Header>
      {!BoolSkills && <Modal.Body>
        <div className="d-flex justify-content-center align-items-center flex-column">
          <p>Please upload the resume to enable test</p>
        </div>
      </Modal.Body>  }
      {BoolSkills && <Modal.Body>
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center flex-column">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <h5 className="mt-3">
              <FontAwesomeIcon icon={faQuestionCircle} /> Please wait, the questions are brewing...
            </h5>
          </div>
        ) : (
          <p>Questions have been generated successfully!</p>
        )}
      </Modal.Body> }
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
   );
};

export default CenteredModal;
