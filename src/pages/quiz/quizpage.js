import React, { useState, useRef, useEffect } from 'react';
import '../../styles/quiz.css';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import QuizData from '../../data/quizdata.json';

const QuizPage = ({ topic }) => {
    const navigate = useNavigate();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [points, setPoints] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showPopup, setShowPopup] = useState(false);
    const [popupBorderColor, setPopupBorderColor] = useState('');
    const currentQuestion = QuizData[topic][currentQuestionIndex];
    const popupContentRef = useRef(null);

    const handleBackButtonClick = () => {
        const confirmLeave = window.confirm('Are you sure you want to leave during the quiz? Your progress will not be saved.');
        if (confirmLeave) {
            navigate('/login');
        }
    };

    const handleAnswerClick = (answer) => {
        const isCorrect = answer === currentQuestion.correct_answer;
        setSelectedAnswers({
            ...selectedAnswers,
            [`Question ${currentQuestionIndex + 1}`]: { answer, isCorrect }
        });
        if (isCorrect) {
            setPoints(points + 1);
            setPopupBorderColor('green');
        } else {
            setPopupBorderColor('red');
        }
        setTimeout(() => {
            setShowPopup(true);
        }, 500);
    };

    const closePopup = () => {
        setShowPopup(false);
        if (currentQuestionIndex < QuizData[topic].length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            navigate('/summary', { state: { selectedAnswers, points, totalQuestions: QuizData[topic].length } });
        }
    };

    return (
        <div className="container">
            <div className="top-right-info">
                <div className="question-number">Question {currentQuestionIndex + 1} out of {QuizData[topic].length}</div>
                <div className="points">Points: {points} XP</div>
            </div>

            <div className="back-button">
                <IconButton onClick={handleBackButtonClick}>
                    <ArrowBackIcon />
                </IconButton>
            </div>
            <div className="heading">{`${topic.charAt(0).toUpperCase() + topic.slice(1)} Quiz`}</div>
            <div className="question">{currentQuestion.question}</div>
            <img src={require(`../../resources/${currentQuestion.image}`)} alt="Quiz Item" className="quiz-image" />
            {showPopup ? null : (
                currentQuestion.answer_choices.map((answer, index) => (
                    <button key={index} className={`answer ${selectedAnswers[`Question ${currentQuestionIndex + 1}`]?.answer === answer ? (answer === currentQuestion.correct_answer ? 'correct' : 'wrong') : ''}`}
                            onClick={() => handleAnswerClick(answer)}
                            disabled={showPopup}>
                        {answer}
                    </button>
                ))
            )}

            {showPopup && (
                <div className="popup" ref={popupContentRef}>
                    <div className={`popup-content ${popupBorderColor === 'green' ? 'correct-border' : (popupBorderColor === 'red' ? 'wrong-border' : '')}`} ref={popupContentRef}>
                    <img src={require(`../../resources/${currentQuestion.image}`)} alt="Quiz Item" className="popup-image" />
                        <div className="popup-text">{selectedAnswers[`Question ${currentQuestionIndex + 1}`]?.isCorrect ? "Correct!" : "Wrong!"}</div>
                        <div className="popup-description">{currentQuestion.description}</div>
                        <button className="next-button" onClick={closePopup}>Next</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuizPage;