import { RootState } from 'global/redux/store'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const useStateSelector: TypedUseSelectorHook<RootState> = useSelector
