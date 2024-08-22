import React, { useState, useRef, useEffect } from 'react';
import './quiz.css';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Food3 = () => {
    const navigate = useNavigate();
    const [points, setPoints] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [popupBorderColor, setPopupBorderColor] = useState('');
    const [showNextButton, setShowNextButton] = useState(false);
    const correctAnswer = "Rambutan";
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
        navigate('/food4');
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
                <div className="question-number">Question 3 out of 10</div>
                <div className="points">Points: {points} XP</div>
            </div>

            <div className="back-button">
                <IconButton onClick={handleBackButtonClick}>
                    <ArrowBackIcon />
                </IconButton>
            </div>
            <div className="heading">Food Quiz</div>
            <div className="question">What fruit is this?</div>
            <img
                src={require('../resources/rambutan.jpg')}
                alt="Rambutan"
                className="quiz-image"
            />
            <form action="" className="form">
                {showPopup ? null : (
                    ["Durian", "Lychee", "Rambutan", "Dragon Fruit"].map((answer, index) => (
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
                            src={require('../resources/rambutan.jpg')}
                            alt="Rambutan"
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
                            <b>{correctAnswer}</b> is a tropical fruit known for its hairy skin and sweet, juicy flesh. It is native to Southeast Asia and is commonly enjoyed fresh or in various desserts.
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

export default Food3;
