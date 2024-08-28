import React from 'react';
import {BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation} from "react-router-dom";
import Home from "./pages/home.js";
import Login from "./pages/login.js";
import ForgotPassword from "./pages/forgotpassword.js"
import Register from "./pages/register.js";
import Verification from "./pages/verification.js";
import Food1 from "./pages/quiz/food/food1.js";
import Food2 from "./pages/quiz/food/food2.js";
import Food3 from "./pages/quiz/food/food3.js";
import Food4 from "./pages/quiz/food/food4.js";
import Food5 from "./pages/quiz/food/food5.js";
import Food6 from "./pages/quiz/food/food6.js";
import Food7 from "./pages/quiz/food/food7.js";
import Food8 from "./pages/quiz/food/food8.js";
import Food9 from "./pages/quiz/food/food9.js";
import Food10 from "./pages/quiz/food/food10.js";
import Penang1 from "./pages/quiz/places/penang1.js";
import Penang2 from "./pages/quiz/places/penang2.js";
import Penang3 from "./pages/quiz/places/penang3.js";
import Penang4 from "./pages/quiz/places/penang4.js";
import Penang5 from "./pages/quiz/places/penang5.js";
import Perlis1 from "./pages/quiz/places/perlis1.js";
import Perlis2 from "./pages/quiz/places/perlis2.js";
import Perlis3 from "./pages/quiz/places/perlis3.js";
import Perlis4 from "./pages/quiz/places/perlis4.js";
import Perlis5 from "./pages/quiz/places/perlis5.js";
import Sarawak1 from "./pages/quiz/places/sarawak1.js";
import Sarawak2 from "./pages/quiz/places/sarawak2.js";
import Sarawak3 from "./pages/quiz/places/sarawak3.js";
import Sarawak4 from "./pages/quiz/places/sarawak4.js";
import Sarawak5 from "./pages/quiz/places/sarawak5.js";
import Clothes1 from "./pages/quiz/clothes/clothes1.js";
import Clothes2 from "./pages/quiz/clothes/clothes2.js";
import Clothes3 from "./pages/quiz/clothes/clothes3.js";
import Clothes4 from "./pages/quiz/clothes/clothes4.js";
import Clothes5 from "./pages/quiz/clothes/clothes5.js";
import Summary from "./pages/summary.js";
import Choice from "./pages/choice.js";
import QuizTopics from "./pages/quiztopics.js";
import QuizPlaces from "./pages/quizplaces.js";
import LearnTopics from "./pages/learntopics.js";
import LearnPlaces from "./pages/learn/learnplaces.js";
import LearnPenang from "./pages/learn/learnpenang.js";
import LearnPerlis from "./pages/learn/learnperlis.js";
import LearnSarawak from "./pages/learn/learnsarawak.js";
import LearnFood from "./pages/learn/learnfood.js";
import LearnClothes from "./pages/learn/learnclothes.js";
import Menu from "./pages/menu.js";
import Profile from "./pages/profile.js";
import Error from "./pages/error.js";
import {Button, Container} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Leaderboard from "./pages/leaderboard.js";
import QuizPage from "./pages/quiz/quizpage.js";

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
                        <Route path="penang1" element={<Penang1/>}/>
                        <Route path="penang2" element={<Penang2 />} />
                        <Route path="penang3" element={<Penang3 />} />
                        <Route path="penang4" element={<Penang4 />} />
                        <Route path="penang5" element={<Penang5 />} />
                        <Route path="perlis1" element={<Perlis1 />} />
                        <Route path="perlis2" element={<Perlis2 />} />
                        <Route path="perlis3" element={<Perlis3 />} />
                        <Route path="perlis4" element={<Perlis4 />} />
                        <Route path="perlis5" element={<Perlis5 />} />
                        <Route path="sarawak1" element={<Sarawak1/>}/>
                        <Route path="sarawak2" element={<Sarawak2/>}/>
                        <Route path="sarawak3" element={<Sarawak3/>}/>
                        <Route path="sarawak4" element={<Sarawak4/>}/>
                        <Route path="sarawak5" element={<Sarawak5/>}/>
                        <Route path="clothes1" element={<Clothes1 />} />
                        <Route path="clothes2" element={<Clothes2 />} />
                        <Route path="clothes3" element={<Clothes3 />} />
                        <Route path="clothes4" element={<Clothes4 />} />
                        <Route path="clothes5" element={<Clothes5 />} />
                        <Route path="summary" element={<Summary/>}/>
                        <Route path="learntopics" element={<LearnTopics/>}/>
                        <Route path="quiztopics" element={<QuizTopics/>}/>
                        <Route path="learnplaces" element={<LearnPlaces/>}/>
                        <Route path="learnpenang" element={<LearnPenang/>}/>
                        <Route path="learnperlis" element={<LearnPerlis/>}/>
                        <Route path="learnsarawak" element={<LearnSarawak/>}/>
                        <Route path="quizplaces" element={<QuizPlaces/>}/>
                        <Route path="learnfood" element={<LearnFood/>}/>
                        <Route path="learnclothes" element={<LearnClothes/>}/>
                        <Route path="*" element={<Error/>}/>
                        <Route path="leaderboard" element={<Leaderboard/>}/>
                        <Route path="quizpage" element={<QuizPage/>}/>
                        <Route path="/quiz/food" element={<QuizPage topic="food" />} />
                        <Route path="/quiz/clothes" element={<QuizPage topic="clothes" />} />
                    </Route>
                </Routes>
        </Container>
    );
}

export default App;