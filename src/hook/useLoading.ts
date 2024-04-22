import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../redux/loadingSlice'

interface loadingState {
  loading: { isLoading: boolean }
}

const useLoading = () => {
  const loading = useSelector((state: loadingState) => state.loading.isLoading)

  const dispatch = useDispatch()

  const showLoading = () => {
    dispatch(setLoading(true))
  }

  const hideLoading = () => {
    dispatch(setLoading(false))
  }

  return { loading, showLoading, hideLoading }
}

export default useLoading
