import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderFooter from './HeaderFooter';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import ContactForm from './ContactForm';
import Resume from './Resume';
import './App.css'; // Import main CSS file

const App = () => {
    return (
        <Router>
            <HeaderFooter />
            <Switch>
                <Route path="/" exact component={AboutMe} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={ContactForm} />
                <Route path="/resume" component={Resume} />
            </Switch>
        </Router>
    );
};

export default App;