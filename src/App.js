import React from 'react';
import './App.css';

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/home.js";
import Login from "./pages/login.js";
import ForgotPassword from "./pages/forgotPassword.js"
import Register from "./pages/register.js";
import Verification from "./pages/verification.js";
import Topics from "./pages/topics.js";
import Clothes from "./pages/clothes.js";
import Food from "./pages/food.js";

function App() {
    return (
        <div className="WApp">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route path="" element={<Home/>}/>
                        <Route path="home" element={<Home/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="register" element={<Register/>}/>
                        <Route path="topics" element={<Topics/>}/>
                        <Route path="forgotPassword" element={<ForgotPassword/>}/>
                        <Route path="verification" element={<Verification/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
