import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'

import { Button } from './ui/button'
import { Input } from './ui/input'

const searchForm = z.object({
  search: z.string(),
})

type SearchFormTypes = z.infer<typeof searchForm>

export const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm()

  const navigate = useNavigate()

  const handleSearch = async (data: SearchFormTypes) => {
    if (data.search.trim() !== '') {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${data.search.toLocaleLowerCase()}`
      )

      const finds = await res.json()

      if (finds) {
        navigate(`/pokemon/${finds.name}`)
      }
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
