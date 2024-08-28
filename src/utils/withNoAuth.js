import React, { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

// Higher-Order Component for redirecting authenticated users
const withNoAuth = (WrappedComponent) => {
    const NoAuthComponent = (props) => {
        const navigate = useNavigate();
        const auth = getAuth();

        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    navigate('/menu'); // Redirect to /menu if authenticated
                }
            });

            return () => unsubscribe(); // Clean up subscription on unmount
        }, [auth, navigate]);

        return <WrappedComponent {...props} />;
    };

    return NoAuthComponent;
};

export default withNoAuth;