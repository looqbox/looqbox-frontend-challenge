import { Input } from "antd";
import "./styles.css";

interface SearchComponentProps {
  onSearch?: (value: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
  const { Search } = Input;

  return (
    <Search
      className="custom-search"
      placeholder="Pesquise por Pokemon"
      allowClear
      enterButton="Pesquisar"
      size="large"
      onSearch={onSearch}
    />
  );
};

export default SearchComponent;
