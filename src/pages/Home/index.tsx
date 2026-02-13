import { Button } from 'antd'
import { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useNavigate } from 'react-router'
import VideoBanner from '../../assets/banner.mp4'
import { useAppDispatch } from '../../store'
import { loadAllPokemonNames } from '../../store/slices/pokemon'

export function Home() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadAllPokemonNames())
  }, [])

  return (
    <div className='relative h-dvh w-full overflow-hidden'>
      <div className='absolute inset-0'>
        <ReactPlayer
          src={VideoBanner}
          width={'100%'}
          height={'100dvh'}
          autoPlay
          muted
          controls={false}
          loop
          className='absolute left-0 top-1/2 w-full min-h-[120%] -translate-y-1/2 object-cover'
        />
        <div className='absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent' />
      </div>

      <div className='relative z-10 flex h-full items-center justify-center md:justify-start text-center md:text-left text-white '>
        <div className='flex flex-col items-center md:items-start gap-4 md:gap-8 px-[5%]'>
          <p className='md:w-80 mt-4 text-5xl text-shadow-zinc-900 font-cursive'>
            Your journey starts here!
          </p>
          <Button
            type='primary'
            onClick={() => navigate('/pokemons')}
            className='w-fit text-xl! italic bg-red-800! font-medium! rounded-tr-none! rounded-bl-none! transition-colors! hover:animate-pulse'
          >
            Let's GO!
          </Button>
        </div>
      </div>
    </div>
  )
}
