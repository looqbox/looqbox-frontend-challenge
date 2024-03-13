import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { searchPokemon } from '@/api/searchPokemon'

import { Button } from './ui/button'
import { Input } from './ui/input'

const searchForm = z.object({
  search: z.string(),
})

export type SearchFormTypes = z.infer<typeof searchForm>

export const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormTypes>()

  const navigate = useNavigate()

  const { mutateAsync: search } = useMutation({
    mutationFn: searchPokemon,
    retry: 3,
  })

  const handleSearch = async (data: SearchFormTypes) => {
    const valueSearched = data.search

    if (valueSearched.trim() !== '') {
      const name = valueSearched.toLocaleLowerCase()

      await search(name)

      navigate(`/pokemon/${name}`)
    }
  }

  return (
    <form
      className="flex w-full max-w-96 gap-4"
      onSubmit={handleSubmit(handleSearch)}
    >
      <Input
        className="w-full border-white"
        type="search"
        placeholder="Search for pokémon; e.g. Lucario"
        {...register('search')}
      />

      <Button disabled={isSubmitting} className="text-white">
        Submit
      </Button>
    </form>
  )
}
