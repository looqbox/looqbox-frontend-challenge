import { useEffect, useState } from 'react'

export const useAudio = (url: string): [boolean, () => void] => {
  const [audio] = useState(() => new Audio(url))
  const [playing, setPlaying] = useState(false)

  const toggleAudio = () => setPlaying(p => !p)

  useEffect(() => {
    if (playing) audio.play()
    else audio.pause()
  }, [playing, audio])

  useEffect(() => {
    const handleEnded = () => setPlaying(false)
    audio.addEventListener('ended', handleEnded)
    return () => {
      audio.removeEventListener('ended', handleEnded)
    }
  }, [audio])

  return [playing, toggleAudio]
}
