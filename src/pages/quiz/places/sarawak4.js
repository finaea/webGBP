import React, { useState, useRef, useEffect } from 'react';
import '../../../styles/quiz.css';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Sarawak4 = () => {
    const navigate = useNavigate();
    const [points, setPoints] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [popupBorderColor, setPopupBorderColor] = useState('');
    const [showNextButton, setShowNextButton] = useState(false);
    const correctAnswer = "Rafflesia";
    const popupContentRef = useRef(null);

    const handleBackButtonClick = () => {
        const confirmLeave = window.confirm(
            'Are you sure you want to leave during the quiz? Your progress will not be saved.'
        );
        if (confirmLeave) {
            navigate('/login'); 
        }
    };

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
        if (answer === correctAnswer) {
            setPoints(points + 1);
            setPopupBorderColor('green');
        } else {
            setPopupBorderColor('red');
        }

        setTimeout(() => {
            setShowPopup(true);
            setShowNextButton(false);
        }, 500);
    };

    const closePopup = () => {
        setShowPopup(false);
        setShowNextButton(true);
    };

    const goToNextQuestion = () => {
        setShowPopup(false);
        navigate('/sarawak5');
    };

    const handleClickOutside = (event) => {
        if (popupContentRef.current && !popupContentRef.current.contains(event.target)) {
            closePopup();
        }
    };

    useEffect(() => {
        if (showPopup) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [showPopup]);

    return (
        <div className="container">
            <div className="top-right-info">
                <div className="question-number">Question 4 out of 10</div>
                <div className="points">Points: {points} XP</div>
            </div>

            <div className="back-button">
                <IconButton onClick={handleBackButtonClick}>
                    <ArrowBackIcon />
                </IconButton>
            </div>
            <div className="heading">Sarawak Quiz</div>
            <div className="question">The world’s largest flower can be found in Sarawak. What is the name of the flower?</div>
            <img
                src={require('../../../resources/rafflesia.jpg')}
                alt="Rafflesia"
                className="quiz-image"
            />
            <form action="" className="form">
                {showPopup ? null : (
                    ["Orchid", "Hibiscus", "Rafflesia", "Lotus"].map((answer, index) => (
                        <input
                            key={index}
                            className={`answer ${selectedAnswer === answer ? (answer === correctAnswer ? 'correct' : 'wrong') : ''}`}
                            type="button"
                            value={answer}
                            onClick={() => handleAnswerClick(answer)}
                            disabled={selectedAnswer !== null}
                        />
                    ))
                )}
            </form>

            {showPopup && (
                <div className="popup">
                    <div className={`popup-content ${popupBorderColor === 'green' ? 'correct-border' : (popupBorderColor === 'red' ? 'wrong-border' : '')}`} ref={popupContentRef}>
                        <img
                            src={require('../../../resources/rafflesia.jpg')}
                            alt="Rafflesia"
                            className="popup-image"
                        />
                        <div className="popup-text">
                            {selectedAnswer === correctAnswer ? "Correct!" : "Wrong!"}
                        </div>
                        <div className="popup-description">
                            {selectedAnswer !== correctAnswer && (
                                <div>
                                    The correct answer is <b>{correctAnswer}</b>. <br /> <br />
                                </div>
                            )}
                            <b>{correctAnswer}</b> is known for being the world's largest flower and is a rare species found in the rainforests of Sarawak.
                        </div>
                        <button className="next-button" onClick={goToNextQuestion}>Next</button>
                    </div>
                </div>
            )}

            {showNextButton && !showPopup && (
                <button className="next-button" onClick={goToNextQuestion}>Next</button>
            )}
        </div>
    );
};

export default Sarawak4;