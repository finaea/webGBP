import React from 'react';
import '../styles/leaderboard.css';

function Leaderboard() {
    const currentUser = 'Charlie'; // Replace this with the actual logged-in user's name or ID
    const leaderboardData = [
        { rank: 1, name: 'Alice', score: 1500 },
        { rank: 2, name: 'Bob', score: 1400 },
        { rank: 3, name: 'Charlie', score: 1300 },
        { rank: 4, name: 'David', score: 1200 },
        { rank: 5, name: 'Eva', score: 1100 }
        // Add more user data as needed
    ];

    return (
        <div className="leaderboard-container">
            <h1 className="heading">Leaderboard</h1>
            <table className="leaderboard-table">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboardData.map((user, index) => (
                        <tr 
                            key={index} 
                            className={user.name === currentUser ? 'highlighted-row' : ''}
                        >
                            <td>{user.rank}</td>
                            <td>{user.name}</td>
                            <td>{user.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Leaderboard;
