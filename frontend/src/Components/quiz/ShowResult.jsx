import React from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';

const ShowResult = ({ userAnswers, score, totalQuestions, onReset }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Test Feedback</Card.Title>
        <Card.Text>Score: {score} / {totalQuestions}</Card.Text>

        {/* Question details */}
        <ListGroup variant="flush">
          {userAnswers.map((answer, index) => (
            <ListGroup.Item key={index}>
              <p>
                <b>Question:</b> {answer.question}
              </p>

              {/* Answer selection */}
              <p>
                <b>Your Answer:</b> {answer.selectedAnswer}
                <span style={{ color: answer.isCorrect ? 'green' : 'red' }}>
                  {answer.isCorrect ? ' (Correct)' : ' (Wrong)'}
                </span>
              </p>

              {/* Correct answer */}
              <p>
                <b>Correct Answer:</b> {answer.correctAnswer}
              </p>

              {/* Description (if available) */}
              {answer.description && <p><b>Description:</b> {answer.description}</p>}
            </ListGroup.Item>
          ))}
        </ListGroup>

        <Button variant="primary" onClick={onReset}>
          Reset Quiz
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ShowResult;
