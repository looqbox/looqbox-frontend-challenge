import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'
import Details from '../pages/Details';
import React from 'react';

const RoutesApp: React.FC = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/details/:name" element={<Details />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}

export default RoutesApp;
