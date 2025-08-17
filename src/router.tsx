
import { Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/home-page'
import FavoritesPage from '@/pages/favorites-page'
import PokemonDetailsPage from '@/pages/pokemon-details-page'
import NotFoundPage from '@/pages/not-found-page'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/favorites' element={<FavoritesPage />} />
            <Route path='/details/:id' element={<PokemonDetailsPage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}
