import { Input } from 'antd'

interface Props {
  isLoading: boolean
  setSearchName: React.Dispatch<React.SetStateAction<string>>
}

const Searchbar = ({ isLoading, setSearchName }: Props) => {
  return (
    <Input.Search
      allowClear
      loading={isLoading}
      placeholder="Search by name or ID of a Pokémon"
      onSearch={name => setSearchName(name)}
    />
  )
}

export default Searchbar
