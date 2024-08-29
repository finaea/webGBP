import React, { useState } from 'react';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../database'; // Import auth from database.js

const PasswordReset = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleResetPassword = async (e) => {
        e.preventDefault();

        if (email.trim() === '') {
            setError('Please enter a valid email address.');
            return;
        }

        try {
            await sendPasswordResetEmail(auth, email);
            alert('Password reset email sent! Check your inbox.');
            navigate('/login');
        } catch (error) {
            setError('Failed to send reset email: ' + error.message);
        }
    };

    return (
        <div className="container">
            <div className="heading">Reset Password</div>
            <p>Enter your email address and we will send you instructions to reset your password.</p>
            <form className="form" onSubmit={handleResetPassword}>
                <input
                    required
                    className="input"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {error && <p className="error-message">{error}</p>}
                <input className="login-button" type="submit" value="Submit" />
                <button type="button" className="cancel-button" onClick={() => navigate('/login')}>Cancel</button>
                <span className="forgot-password">
                    <a href="/register">Don't have an account? Register</a>
                </span>
            </form>
        </div>
    );
};

export default PasswordReset;