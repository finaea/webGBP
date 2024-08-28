import React, { useState } from 'react';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../database'; // Import Firebase app from database.js

const auth = getAuth(app); // Initialize Firebase Auth

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        
        // Check for empty fields
        if (email.trim() === '' || password.trim() === '') {
            setError('Email and password fields cannot be empty.');
            return;
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            if (user.emailVerified) {
                navigate('/menu'); // Navigate to the menu page if email is verified
            } else {
                setError('Please verify your email before logging in.');
            }
        } catch (error) {
            setError('Wrong email or password entered. Please retry again.');
        }
    };

    const handleForgotPassword = () => {
        navigate('/forgotPassword');
    };

    return (
        <div className="container">
            <div className="heading">Welcome back!</div>
            <form className="form" onSubmit={handleLogin}>
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
                <input
                    required
                    className="input"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p className="error-message">{error}</p>}
                <input className="login-button" type="submit" value="Log In" />
                <span className="forgot-password">
                    <a href="#" onClick={handleForgotPassword}>Forgot Password?</a>
                </span>
            </form>
        </div>
    );
};

export default Login;