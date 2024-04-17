import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, FavouritesState } from '..'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<FavouritesState>();