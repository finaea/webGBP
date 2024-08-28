import React from 'react';
import QuizData from '../../data/quizdata.json';
import '../../styles/learn.css';
import { useParams } from 'react-router-dom';

const LearnPage = () => {
    const { topic } = useParams();
    const data = QuizData[topic];

    if (!data) {
        return <div className="error">Topic not found</div>;
    }

    return (
        <div className="learn-page-container">
            <h1 className="heading">Learning: {topic.charAt(0).toUpperCase() + topic.slice(1)}</h1>
            <div className="learn-content">
                {data.map((item, index) => (
                    <div key={index} className="learn-item">
                        <h2 className="question">{item.question}</h2>
                        <img
                            src={require(`../../resources/${item.image}`)}
                            alt={item.question}
                            className="learn-image"
                        />
                        <p className="description">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LearnPage;
