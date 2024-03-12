import { Searchbar } from "../../components/Searchbar";
import { PokemonGrid } from "./components/PokemonGrid";

import { usePokemonInformationContext } from "../../../hooks/usePokemonInformationContext";

import "./_styles.scss";

export default function Home() {
    const { handleSearch, isLoadingSearch, handleSearchClear } = usePokemonInformationContext();

    return (
        <main style={{maxWidth: "1200px", margin: "24px auto 0"}}>
            <Searchbar onHandleSearch={handleSearch} isLoading={isLoadingSearch} onHandleSearchClear={handleSearchClear}/>

            <PokemonGrid />
        </main>
    );
}