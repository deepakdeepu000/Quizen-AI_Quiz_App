import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Row , Col , Text } from 'react-bootstrap';
import { useState , useEffect} from "react";
import axios from "axios";
import Container from 'react-bootstrap/esm/Container';
import withNavbar from '../Navigation/withNavbar';
import FileUpload from './fileUpload';
import './handleUpload.css';
import { useNavigate } from 'react-router-dom';




const  HandleUpload = ({navigation})=> {
  const [resume, setResume] = useState(null);
  const [extractedText, setExtractedText] = useState(null);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [extracted, setExtracted] = useState(false);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const HandleSingleTest = async (skill) => {
    console.log("skill:",skill);
    try {
      const response = await axios.post('http://localhost:5000/api/SkillTestGeneration',{
       skill
    });
    console.log("response:",response);
      if (response.status !== 200) {
        throw new Error('Network response was not ok');
      }
      const responseData = response.data; // Parse response as JSON
      console.log(responseData)
      navigate('/upload/Resume-Test/QuestionGeneration', { state: { apiData: responseData } }); // Use responseData
    } catch (error) {
      console.error('Error fetching description:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new FormData object
    const formData = new FormData();

    // Append the resume file to the form data
    formData.append("resume", resume);

    try {
      // Send a POST request to the server to upload the resume
      const response = await axios.post("http://localhost:5000/uploadResume", formData);

      console.log("response:",response);
      const {extractedText} = response.data;

      setExtractedText(extractedText);
      console.log("extracted text;",extractedText);

      // Handle skills and projects extraction
      const {skills, projects} = extractedText;
  
      // Set the extracted skills and projects in the state
      setSkills(skills);
      console.log("skills:",skills);
  
      // Map over the extracted projects to adjust the structure
      const formattedProjects = projects.map(project => ({
        projectName: project.projectName,
        description: project.description,
        technologies: project.technologies
      }));
  
      // Set the formatted projects in the state
      setProjects(formattedProjects);
      setExtracted(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (skills.length > 0) {
      // Create items list from extracted data
      const newItems = skills.map((skill, index) => ({
        key: index,
        skill,
        imgurl:  `/skills/${skill.toLowerCase()}.jpeg`,
      }));
      setItems(newItems);
    }
  }, [skills.length]);

  console.log("items:",items);
  console.log("skills:",skills);

  return (
    <>
        < FileUpload
          onSubmit={handleSubmit}
          skills = {skills}
          onChange={(e) => {
            setResume(e.target.files[0]);
          }}

         />
      {extractedText && (<Container ClassName = "wrapper">
        {/* Container for displaying extracted skills and projects */}
          <div>
            
            <Row>+
              {items.map(item => (
                <Col key={item.key} md={4}>
                  <Card className="skill-card">
                    <Card.Img variant="top" src={item.imgurl} />
                    <Card.Body>
                      <Card.Title style={{ fontSize: "1.15rem" }}>Skill: {item.skill}</Card.Title>
                      <Button variant="success" className="btn btn-success" onClick={() => HandleSingleTest(item.skill)}>
                        Take Test
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <h5>Extracted Projects:</h5>
            <Row>
              {projects.map((project, index) => (
                <Col key={index} md={4}>
                  <Card className="project-card">
                    <Card.Body>
                      <Card.Title>Project Name: {project.projectName}</Card.Title>
                      <Card.Text>
                        <strong>Description:</strong> {project.description}
                      </Card.Text>
                      <Card.Text>
                        <strong>Technologies:</strong> {project.technologies.join(", ")}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
       
      </Container> )}
    </>
  );
}

const WrappedUploadScreen = withNavbar(HandleUpload);

export default WrappedUploadScreen;
