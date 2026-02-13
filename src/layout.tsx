import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { PokemonDetails } from './pages/PokemonDetails'
import { Pokemons } from './pages/Pokemons'
import { store } from './store'

export default function RootLayout() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <div className='w-full min-h-dvh flex flex-col'>
                <Home />
              </div>
            }
          />
          <Route
            path='/pokemons'
            element={
              <div className='w-full min-h-dvh flex flex-col'>
                <Navbar title='Pokemons' />
                <Pokemons />
                <Footer />
              </div>
            }
          />
          <Route
            path='/pokemons/:id/details'
            element={
              <div className='w-full min-h-dvh flex flex-col bg-blue-50'>
                <Navbar title='Details' />
                <PokemonDetails />
                <Footer />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </ReduxProvider>
  )
}
