import { ChangeEvent } from "react";
import { SearchInput } from "./styles";

type Props = {
  variant?: "outlined" | "borderless" | "filled" | undefined;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
};

const SearchBar = (props: Props) => {
  return (
    <SearchInput
      variant={props.variant || "outlined"}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onSearch={props.onSearch}
      onPressEnter={props.onSearch}
    />
  );
};

export default SearchBar;
