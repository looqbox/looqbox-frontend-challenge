import { useEffect } from 'react'

export const useClickOutside = (handleClickOutside: () => void, [ref, ...refs]: any[]): void => {
  useEffect(() => {
    function onClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) handleClickOutside()
    }
    // Bind the event listener
    document.addEventListener('mousedown', onClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', onClickOutside)
    }
  }, [handleClickOutside, ref, ...refs])
}