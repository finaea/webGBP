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
import Food1 from "./pages/food1.js";
import Food2 from "./pages/food2.js";
import Food3 from "./pages/food3.js";

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
                        <Route path="food1" element={<Food1/>}/>
                        <Route path="food2" element={<Food2/>}/>
                        <Route path="food3" element={<Food3/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
