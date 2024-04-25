import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Loading from './components/Loading'
import Footer from './components/Layout/Footer'
import Header from './components/Layout/Header'

function App() {
  return (
    <div>
      <Header />
      <Loading />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
