import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/quiz.css'; 
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const Summary = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { selectedAnswers, points, totalQuestions } = location.state; 

    const correctAnswersCount = Object.values(selectedAnswers).filter(answer => answer.isCorrect).length;

    const handleBackButtonClick = () => {
        navigate('/quiz'); 
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
