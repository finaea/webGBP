import React from 'react';

import {BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation} from "react-router-dom";
import Home from "./pages/home.js";
import Login from "./pages/login.js";
import ForgotPassword from "./pages/forgotpassword.js"
import Register from "./pages/register.js";
import Verification from "./pages/verification.js";
import Food1 from "./pages/food1.js";
import Food2 from "./pages/food2.js";
import Food3 from "./pages/food3.js";
import Food4 from "./pages/food4.js";
import Food5 from "./pages/food5.js";
import Food6 from "./pages/food6.js";
import Food7 from "./pages/food7.js";
import Food8 from "./pages/food8.js";
import Food9 from "./pages/food9.js";
import Food10 from "./pages/food10.js";
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
import {Button, Container} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Leaderboard from "./pages/leaderboard.js";
import QuizPage from "./pages/quizpage.js";

function BackButton() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };

    return (
        <Button
            onClick={handleBack}
            variant="contained"
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                padding: '8px 16px',
            }}
        >
            <ArrowBackIcon style={{ color: '#ffffff' }} />
        </Button>
    );
}

function App() {
    const location = useLocation();
    const showBackButton = !['/', '/home', '/menu'].includes(location.pathname);
    return (
        <Container>
            {showBackButton && <BackButton />}
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
                        <Route path="food4" element={<Food4/>}/>
                        <Route path="food5" element={<Food5/>}/>
                        <Route path="food6" element={<Food6/>}/>
                        <Route path="food7" element={<Food7/>}/>
                        <Route path="food8" element={<Food8/>}/>
                        <Route path="food9" element={<Food9/>}/>
                        <Route path="food10" element={<Food10/>}/>
                        <Route path="summary" element={<Summary/>}/>
                        <Route path="learntopics" element={<LearnTopics/>}/>
                        <Route path="quiztopics" element={<QuizTopics/>}/>
                        <Route path="learnplaces" element={<LearnPlaces/>}/>
                        <Route path="learnfood" element={<LearnFood/>}/>
                        <Route path="learnclothes" element={<LearnClothes/>}/>
                        <Route path="*" element={<Error/>}/>
                        <Route path="leaderboard" element={<Leaderboard/>}/>
                        <Route path="quizpage" element={<QuizPage/>}/>
                    </Route>
                </Routes>
        </Container>
    );
}

export default App;