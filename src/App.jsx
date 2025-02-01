import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderFooter from './components/HeaderFooter';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import Resume from './components/Resume';
import './App.css';

const App = () => {
    return (
        <Router>
            <HeaderFooter />
            <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<ContactForm />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </Router>
    );
};

export default App;
