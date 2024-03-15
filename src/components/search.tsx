import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { searchPokemon } from '@/api/searchPokemon'

import { Loader } from './loader'
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
  } = useForm<SearchFormTypes>({
    defaultValues: {
      search: '',
    },
  })

  const navigate = useNavigate()

  const { mutateAsync: search } = useMutation({
    mutationFn: searchPokemon,
    retry: 1,
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
    <div className="flex w-full justify-center border-b border-white pb-8">
      <form
        className="flex w-full max-w-96 gap-4"
        onSubmit={handleSubmit(handleSearch)}
      >
        <Input
          data-testid="search-input"
          className="w-full border-white"
          type="search"
          placeholder="Search for pokémon; e.g. Lucario"
          {...register('search')}
        />

        <Button disabled={isSubmitting} className="min-w-20 text-white">
          {isSubmitting ? <Loader height={30} width={30} /> : 'Submit'}
        </Button>
      </form>
    </div>
  )
}
