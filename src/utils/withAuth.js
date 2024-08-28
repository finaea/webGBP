import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

// Higher-Order Component for authentication
const withAuth = (WrappedComponent) => {
    const AuthenticatedComponent = (props) => {
        const [isAuthenticated, setIsAuthenticated] = useState(false);
        const navigate = useNavigate();
        const auth = getAuth();

        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    setIsAuthenticated(true);
                } else {
                    setIsAuthenticated(false);
                    navigate('/login'); // Redirect to login if not authenticated
                }
            });

            return () => unsubscribe(); // Clean up subscription on unmount
        }, [auth, navigate]);

        return isAuthenticated ? <WrappedComponent {...props} /> : null;
    };

    return AuthenticatedComponent;
};

export default withAuth;