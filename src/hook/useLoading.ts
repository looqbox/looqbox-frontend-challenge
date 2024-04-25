import { useDispatch, useSelector } from 'react-redux'
import { setLoading, incrementCalls, decrementCalls } from '../redux/loadingSlice'
import { useEffect, useState } from 'react'

interface loadingState {
  loading: { isLoading: boolean; calls: number }
}

const useLoading = () => {
  const loading = useSelector((state: loadingState) => state.loading.isLoading)
  const calls = useSelector((state: loadingState) => state.loading.calls)

  const dispatch = useDispatch()

  useEffect(() => {
    if (calls) {
      dispatch(setLoading(true))
    } else {
      dispatch(setLoading(false))
    }
  }, [calls])

  const showLoading = () => {
    dispatch(incrementCalls())
  }

  const hideLoading = () => {
    dispatch(decrementCalls())
  }

  return { loading, showLoading, hideLoading }
}

export default useLoading
