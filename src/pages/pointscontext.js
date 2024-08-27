import React, { createContext, useState } from 'react';

export const PointsContext = createContext();

export const PointsProvider = ({ children }) => {
    const [points, setPoints] = useState(0);

    const addPoint = () => {
        setPoints(points + 1);
    };

    return (
        <PointsContext.Provider value={{ points, addPoint }}>
            {children}
        </PointsContext.Provider>
    );
};
