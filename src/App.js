import React from 'react';
import './App.css';

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import Page3 from "./pages/page3";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route path="" element={<Page1/>}/>
                        <Route path="home" element={<Page1/>}/>
                        <Route path="contact" element={<Page2/>}/>
                        <Route path="*" element={<Page3/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
