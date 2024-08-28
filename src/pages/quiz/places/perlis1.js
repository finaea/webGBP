import React, { useState, useRef, useEffect } from 'react';
import '../../../styles/quiz.css';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Perlis1 = () => {
    const navigate = useNavigate();
    const [points, setPoints] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [popupBorderColor, setPopupBorderColor] = useState('');
    const [showNextButton, setShowNextButton] = useState(false);
    const correctAnswer = "flag_perlis.jpg";
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
        navigate('/perlis2');
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
                <div className="question-number">Question 1 out of 10</div>
                <div className="points">Points: {points} XP</div>
            </div>

            <div className="back-button">
                <IconButton onClick={handleBackButtonClick}>
                    <ArrowBackIcon />
                </IconButton>
            </div>
            <div className="heading">Perlis Flag Quiz</div>
            <div className="question">Which of these is the flag for Perlis state?</div>
            <form action="" className="form">
                {showPopup ? null : (
                    ["flag_ukraine.jpg", "flag_perlis.jpg", "flag_buryatia.jpg", "flag_rwanda.jpg"].map((flag, index) => (
                        <button
                            key={index}
                            className={`answer ${selectedAnswer === flag ? (flag === correctAnswer ? 'correct' : 'wrong') : ''}`}
                            onClick={() => handleAnswerClick(flag)}
                            disabled={selectedAnswer !== null}
                            style={{ padding: 10, margin: 5 }}
                        >
                            <img src={require(`../../../resources/${flag}`)} alt={`Flag of ${flag.split('.')[0]}`} style={{ width: '100%', height: 100, objectFit: 'contain' }} />
                        </button>
                    ))
                )}
            </form>

            {showPopup && (
                <div className="popup">
                    <div className={`popup-content ${popupBorderColor === 'green' ? 'correct-border' : (popupBorderColor === 'red' ? 'wrong-border' : '')}`} ref={popupContentRef}>
                        <div className="popup-text">
                            {selectedAnswer === correctAnswer ? "Correct!" : "Wrong!"}
                        </div>
                        <div className="popup-description">
                            {selectedAnswer !== correctAnswer && (
                                <div>
                                    The correct answer is: <br />
                                </div>
                            )}
                            <img src={require(`../../../resources/${correctAnswer}`)} alt="Correct Flag" style={{ width: '100%', height: 200, objectFit: 'contain' }} />
                            <br />
                            <p>
                            The flag of Perlis consists of a horizontal bicoloured flag with equally proportionate bands of <b>yellow</b> on
                             the upper half and <b>dark blue</b> on the lower half, sharing a similar design only to the flag of Pahang. 
                            The yellow band represents the Raja of Perlis, while the blue represents the people; with the yellow band 
                            over the blue band, the flag attempts to signify the close relationship forged between the Raja and 
                            the people of Perlis.
                            <br /> <br />
                            The flag is similar to the flag of Ukraine, but has a reversed arrangement of colours with darker shades 
                            of blue and yellow as well as a different flag ratio.
                            </p>
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

export default Perlis1;