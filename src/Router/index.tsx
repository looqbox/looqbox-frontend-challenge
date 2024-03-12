import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from '../view/pages/Home';
import DefaultLayout from '../view/layouts/DefaultLayout';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<Home />} />  
                    <Route path="/pokemon/:id" element={<h1>Pokemon details</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}