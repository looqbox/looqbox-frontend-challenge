import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Details from './pages/Details/Details';
import Home from './pages/Home/Home';

function RoutesComponent() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/details/:id' element={<Details/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComponent;
