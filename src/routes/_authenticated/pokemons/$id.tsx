import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/pokemons/$id')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authenticated/pokemons/$id"!</div>
}
