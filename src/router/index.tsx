import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

const RouterComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/landing/forbes/" element={<Home />} />
            </Routes>
        </Router>
    );
};

export default RouterComponent;
