import { Input } from 'antd';

type Props = {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
  onSearch: (value: string) => void;
  onClear?: () => void;
};

export function SearchBar({ value, placeholder, onChange, onSearch, onClear }: Props) {
  return (
    <Input.Search
      value={value}
      placeholder={placeholder}
      allowClear
      enterButton
      size="large"
      onChange={(e) => onChange(e.target.value)}
      onSearch={onSearch}
      onClear={onClear}
    />
  );
}
