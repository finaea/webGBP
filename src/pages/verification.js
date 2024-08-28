import React, { useState } from 'react';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';
import { getAuth, sendEmailVerification } from 'firebase/auth';

const Verification = () => {
    const navigate = useNavigate();
    const auth = getAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


    const handleVerificationCheck = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        try {
            const user = auth.currentUser;
            await user.reload();
            
            if (user.emailVerified) {
                window.alert('Email verified successfully!');
                navigate('/login'); // Navigate to login page after successful verification
            } else {
                window.alert('Email not yet verified. Please check your inbox.');
            }
        } catch (err) {
            console.error('Error checking verification status:', err);
            setError('Error checking verification status. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleResendVerificationEmail = async () => {
        setLoading(true);
        setError('');

        try {
            const user = auth.currentUser;
            if (user) {
                await sendEmailVerification(user);
                window.alert('Verification email sent! Please check your inbox.');
            } else {
                window.alert('No user logged in.');
            }
        } catch (err) {
            console.error('Error sending verification email:', err);
            setError('Error sending verification email. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <div className="heading">Email Verification</div>
            <p>Please check your email for the verification link.</p>
            <form className="form" onSubmit={handleVerificationCheck}>
                <input
                    className="login-button"
                    type="submit"
                    value={loading ? 'Checking...' : 'Check Verification Status'}
                    disabled={loading}
                />
            </form>
            <button
                className="login-button"
                onClick={handleResendVerificationEmail}
                disabled={loading}
            >
                Resend Verification Email
            </button>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default Verification;