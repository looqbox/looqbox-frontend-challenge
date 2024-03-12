import { FormEvent } from 'react'

import { Button } from './ui/button'
import { Input } from './ui/input'

export const Search = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(e.target)
  }

  return (
    <form
      className="flex w-full max-w-96 gap-4"
      onSubmit={(e) => handleSubmit(e)}
    >
      <Input className="w-full border-white" />
      <Button className="text-white">Submit</Button>
    </form>
  )
}
