import React from 'react';
import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import {Container} from "@mui/material";

function App() {
    return (
        <Container>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route path="" element={<Menu/>}/>
                        <Route path="menu" element={<Menu/>}/>
                        <Route path="profile" element={<Profile/>}/>
                        <Route path="*" element={<Error/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Container>
    );
}

export default App;
