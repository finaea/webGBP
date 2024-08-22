import React, { useState, useEffect } from 'react';
import '../styles/quiz.css';
import { useNavigate } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const totalQuestions = 3;

const Summary = () => {
    const navigate = useNavigate();
    const [points, setPoints] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({}); 

    const handleBackButtonClick = () => {
        const confirmLeave = window.confirm(
            'Are you sure you want to leave during the quiz? Your progress will not be saved.'
        );
        if (confirmLeave) {
            navigate('/login'); 
        }
    };

    const goToNextQuestion = () => {
        navigate('/quiztopics'); 
    };

    const correctAnswersCount = Object.values(selectedAnswers).filter(answer => answer.isCorrect).length;

    return (
        <div className="container">
            <div className="top-right-info">
                <div className="points">Points: {points} XP</div>
            </div>

            <div className="heading">Quiz Summary</div>

            <div className="summary">
                <div className="summary-header">
                    <h2>Summary</h2>
                    <div>{correctAnswersCount} out of {totalQuestions} correct</div>
                </div>
                <div className="summary-table">
                    {Array.from({ length: totalQuestions }, (_, index) => (
                        <div key={index} className="summary-row">
                            <div className="question-number">Question {index + 1}</div>
                            <div className="result-icon">
                                {selectedAnswers[`Question ${index + 1}`]?.isCorrect ? (
                                    <CheckIcon color="success" />
                                ) : (
                                    <CloseIcon color="error" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <button className="next-button" onClick={goToNextQuestion}>Next</button>
            </div>
        </div>
    );
};

export default Summary;
