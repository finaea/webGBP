import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/quiz.css';  // Ensure correct path to your CSS file
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const Summary = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { selectedAnswers, points, totalQuestions } = location.state;  // Retrieve passed state

    // Calculate the number of correct answers
    const correctAnswersCount = Object.values(selectedAnswers).filter(answer => answer.isCorrect).length;

    const handleBackButtonClick = () => {
        navigate('/quiztopics');  // Adjust this to go back to the start or wherever you want
    };

    return (
        <div className="container">
            <div className="top-right-info">
                <div className="points">Points: {points} XP</div>
            </div>
            <div className="heading">Quiz Summary</div>
            <div className="summary">
                <h2>Summary</h2>
                <div>{correctAnswersCount} out of {totalQuestions} correct</div>
                <div className="summary-table">
                    {Object.entries(selectedAnswers).map(([questionNumber, answerDetail], index) => (
                        <div key={index} className="summary-row">
                            <div className="question-number">Question {questionNumber}</div>
                            <div className="result-icon">
                                {answerDetail.isCorrect ? <CheckIcon color="success" /> : <CloseIcon color="error" />}
                            </div>
                        </div>
                    ))}
                </div>
                <button className="next-button" onClick={handleBackButtonClick}>Next</button>
            </div>
        </div>
    );
};

export default Summary;
