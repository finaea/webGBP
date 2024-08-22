import React from 'react';
import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home.js";
import Login from "./pages/login.js";
import ForgotPassword from "./pages/forgotpassword.js"
import Register from "./pages/register.js";
import Verification from "./pages/verification.js";
import Food1 from "./pages/food1.js";
import Food2 from "./pages/food2.js";
import Food3 from "./pages/food3.js";
import Summary from "./pages/summary.js";
import Choice from "./pages/choice.js";
import QuizTopics from "./pages/quiztopics.js";
import LearnTopics from "./pages/learntopics.js";
import LearnPlaces from "./pages/learnplaces.js";
import LearnFood from "./pages/learnfood.js";
import LearnClothes from "./pages/learnclothes.js";
import Menu from "./pages/menu.js";
import Profile from "./pages/profile.js";
import Error from "./pages/error.js";
import {Container} from "@mui/material";

function App() {
    return (
        <Container>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route path="" element={<Home/>}/>
                        <Route path="home" element={<Home/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="register" element={<Register/>}/>
                        <Route path="forgotPassword" element={<ForgotPassword/>}/>
                        <Route path="verification" element={<Verification/>}/>
                        <Route path="menu" element={<Menu/>}/>
                        <Route path="profile" element={<Profile/>}/>
                        <Route path="choice" element={<Choice/>}/>
                        <Route path="food1" element={<Food1/>}/>
                        <Route path="food2" element={<Food2/>}/>
                        <Route path="food3" element={<Food3/>}/>
                        <Route path="summary" element={<Summary/>}/>
                        <Route path="learntopics" element={<LearnTopics/>}/>
                        <Route path="quiztopics" element={<QuizTopics/>}/>
                        <Route path="learnplaces" element={<LearnPlaces/>}/>
                        <Route path="learnfood" element={<LearnFood/>}/>
                        <Route path="learnclothes" element={<LearnClothes/>}/>
                        <Route path="*" element={<Error/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </Container>
    );
}

export default App;