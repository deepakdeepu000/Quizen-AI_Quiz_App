import CenteredModal from '../../Resourses/Modals/CenteredModal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate} from 'react-router-dom';
import "./TestModal.css";

const TestModal = ({skills}) => {
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [BoolSkills , setSkills] = useState(false);
    const navigate = useNavigate();

    const TriggerQuestionsGeneration = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/TestGeneration', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ skills })
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.json(); // Parse response as JSON
        console.log(responseData)
        navigate('/upload/Resume-Test/QuestionGeneration', { state: { apiData: responseData } }); // Use responseData
      } catch (error) {
        console.error('Error fetching description:', error);
      }
    };

    const handleOpenModal = () => {
      setShowModal(true);
      setIsLoading(true);
      setSkills(skills.length > 0);
      { skills.length > 0 ?   TriggerQuestionsGeneration() : console.log("Skills not found") };
      setTimeout(() => {
        setIsLoading(false);
      }, 10000); // Adjust delay as needed
    };
  
    return (
      <>
        <Button className="modal-class-16" onClick={handleOpenModal}> Complete Test</Button>
        <CenteredModal
          showModal={showModal}
          onHide={() => setShowModal(false)}
          isLoading={isLoading}
          BoolSkills={BoolSkills}
        ></CenteredModal>
      </>
    );
  };
  
export default TestModal; 