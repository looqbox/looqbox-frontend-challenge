import { useQuery } from '@tanstack/react-query'
import { getTypes } from '../api/getTypes'

export const useGetTypes = (id: number | string) => {
  return useQuery({
    queryKey: ['types', id],
    queryFn: () => getTypes(id)
  })
}
