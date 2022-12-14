import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import './App.scss';

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes path="/">
                    <Route index element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="contact" element={<Contact/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;
