import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Details from '../view/pages/Details'
import Home from '../view/pages/Home'
import DefaultLayout from '../view/layouts/DefaultLayout'

export default function Router () {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/pokemon/:id" element={<Details />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
