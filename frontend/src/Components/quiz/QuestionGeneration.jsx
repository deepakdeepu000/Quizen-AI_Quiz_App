

import React, { useState, useEffect } from 'react';
import { Container, Button, Card, ListGroup  , Alert } from 'react-bootstrap';
import ShowResult from './ShowResult'; // Import ShowResult component
import { useLocation , useNavigate } from 'react-router-dom';
import axios from 'axios';

const TestComponent = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [last, setLast] = useState(false);
  const [error, setError] = useState(null);
  const [isSelected, setIsSelected] = useState(null);
  const [Warning, setWarning] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    // Add event listener for beforeunload event
    const handleBeforeUnload = (event) => {
      // Prevent the default behavior to show the confirmation prompt
      event.preventDefault();
      // Set the prompt message
      event.returnValue = '';
       // Redirect to the root page
       navigate('/');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [navigate]);

  useEffect(() => {
      const fetchedQuestions = location.state?.apiData.quizQuestions;
      if (fetchedQuestions) {
        setQuestions(fetchedQuestions);
      } else {
        navigate('/TextGeneration');
      }
  }, [location.state, navigate]);


  const handleNextQuestion = () => {
    console.log("is selected",isSelected);
    if(isSelected ===null){
      setWarning(true);
    }
    else{
      setIsSelected(null);
      setWarning(null);
      setCurrentQuestionIndex(prevIndex => {
        const newIndex = prevIndex + 1;
        setLast(newIndex === questions.length - 1);
        return newIndex;
      });
    }
  };

  const handleAnswerSelection = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    setUserAnswers(prevAnswers => [
      ...prevAnswers,
      {
        technology: currentQuestion.technology,
        question: currentQuestion.question,
        selectedAnswer: selectedOption,
        correctAnswer: currentQuestion.correctAnswer,
        description: currentQuestion.description,
        isCorrect,
      }
    ]);
    setIsSelected(selectedOption);
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const handleSubmitTest = () => {
    setShowFeedback(true);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
    setShowFeedback(false);
    setLast(false);
  };

  const WarningMessage = () => {
    return(
      <Alert variant="warning">
        Please select an option to proceed
      </Alert>
      )
  }


  return (
    <Container>
      {!showFeedback && questions.length > 0 && (
        <Card>
          <Card.Body>
            <Card.Title>Question {currentQuestionIndex + 1}</Card.Title>
            <Card.Text>{questions[currentQuestionIndex].question}</Card.Text>
            <ListGroup>
              {questions[currentQuestionIndex].questionOptions.map((option , index) => (
                <ListGroup.Item key={`${option}_${index}`}>
                  <div className="d-grid gap-2">
                    <Button
                      onClick={() => handleAnswerSelection(option)}
                      variant={isSelected === option ?  "secondary" : "light"}
                    >
                      {option}
                    </Button>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <Button variant="primary" hidden={last} disabled={currentQuestionIndex === questions.length - 1} onClick={handleNextQuestion} >
              Next
            </Button>
            {Warning && <WarningMessage />}
            {last && <Button variant="primary" onClick={handleSubmitTest}>Submit Test</Button>}
          </Card.Body>
        </Card>
      )}

      {!showFeedback && (questions.length === 0 || error !== null) && (
        <Card>
          <Card.Body>
            {questions.length === 0 && error === null && <Card.Title>Loading Questions...</Card.Title>}
            {error !== null && <Card.Title>Error Fetching Questions</Card.Title>}
          </Card.Body>
        </Card>
      )}

      {showFeedback && (
        <ShowResult
          userAnswers={userAnswers}
          score={score}
          totalQuestions={questions.length}
          onReset={resetQuiz}
        />
      )}
    </Container>
  );
};

export default TestComponent;
