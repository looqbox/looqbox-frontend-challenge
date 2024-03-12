import { Input } from "antd";

import Pokeball from "../../../assets/icons/PokeBall"; 

interface ISearchbarProps {
    onHandleSearch(value: string): void;
    isLoading?: boolean;
    onHandleSearchClear(): void;
}


export function Searchbar({onHandleSearch, isLoading, onHandleSearchClear}: ISearchbarProps) {
    function handleClear(event: React.FormEvent<HTMLInputElement>) {
        if(!event) return;

        if(!event.currentTarget.value) {
            onHandleSearchClear();
        }
    }

    return (
        <Input.Search
            size="large" 
            prefix={<Pokeball />}
            loading={isLoading}
            placeholder="Search for the pokemon name or id"
            onSearch={onHandleSearch}
            onChange={handleClear}
        />
    );
}