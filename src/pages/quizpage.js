import React from 'react';
import '../styles/quiz.css';

const states = [
    "Johor", "Kedah", "Kelantan", "Malacca", "Negeri Sembilan", "Pahang", "Penang",
    "Perak", "Perlis", "Sabah", "Sarawak", "Selangor", "Terengganu", "Kuala Lumpur"
];

const QuizPage = ({ navigateToQuiz }) => {

    const handleButtonClick = (state) => {
        navigateToQuiz(state); // Define this function to navigate to the quiz page for the selected state
    };

    return (
        <div className="quiz-page-container">
            <h1 className="heading">Select a State</h1>
            <div className="state-buttons">
                {states.map((state, index) => (
                    <button
                        key={index}
                        className="state-button"
                        onClick={() => handleButtonClick(state)}
                    >
                        {state}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuizPage;
