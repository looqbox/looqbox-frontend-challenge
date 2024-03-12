import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { Button, Flex } from 'antd'

import { useApDispatch, useAppSelector } from '@/store'
import { fetchPokemons } from '@/store/slices/pokedex'

export function Pagination() {
  const dispatch = useApDispatch()

  const isLoading = useAppSelector((state) => state.pokedex.isLoading)
  const prevUrl = useAppSelector((state) => state.pokedex.previousUrl)
  const nextUrl = useAppSelector((state) => state.pokedex.nextUrl)

  function handlePrev() {
    if (prevUrl) {
      dispatch(fetchPokemons(prevUrl))
    }
  }

  function handleNext() {
    if (nextUrl) {
      dispatch(fetchPokemons(nextUrl))
    }
  }

  return (
    <Flex align="center" gap={24}>
      <Button
        htmlType="button"
        aria-label="Prev Page"
        loading={isLoading}
        disabled={!prevUrl}
        onClick={handlePrev}
        type="text"
      >
        {!isLoading && <ArrowLeftOutlined />} Prev
      </Button>
      <Button
        htmlType="button"
        aria-label="Next Page"
        loading={isLoading}
        disabled={!nextUrl}
        onClick={handleNext}
        type="text"
      >
        Next {!isLoading && <ArrowRightOutlined />}
      </Button>
    </Flex>
  )
}
