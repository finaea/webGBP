import React, { useState } from 'react';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../database'; // Import the registerUser function

const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        const { success, error } = await registerUser(username, email, password);

        if (success) {
            window.alert('Registration successful! Please check your email for verification.');
            navigate('/verification'); // Navigate to verification page after registration
        } else {
            window.alert('Registration failed: ' + error);
        }
    };

    return (
        <div className="container">
            <div className="heading">Create an account</div>
            <form className="form" onSubmit={handleRegister}>
                <input
                    required
                    className="input"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
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
                <span className="forgot-password">
                    Already have an account?
                    <a href="/login">Login</a>
                </span>
                <input className="login-button" type="submit" value="Register"/>
            </form>
        </div>
    );
};

export default Register;