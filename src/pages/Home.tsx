import { useEffect } from "react";
import PokemonCard from "../components/PokemonCard";
import PokemonLoader from "../components/PokemonLoader";
import SearchBar from "../components/SearchBar";
import { fetchInitialPokemons, resetToInitial } from "../store/pokemonSlice";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { PokemonErrorModal } from "../components/PokemonErrorModal";
import { Header } from "../components/Header";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { Pagination, ConfigProvider } from "antd";

function Home() {
    const dispatch = useAppDispatch();
    const { pokemonList, loading, error, currentPage, isTyping } = useAppSelector(state => state.pokemon);

    useScrollToTop(currentPage);

    useEffect(() => {
        if (pokemonList.length === 0) {
            dispatch(fetchInitialPokemons(1));
        }
    }, [dispatch, pokemonList.length]);

    const handleCloseError = () => {
        dispatch(resetToInitial());
    }

    const onPageChange = (page: number) => {
        dispatch(fetchInitialPokemons(page));
    }

    return (
        <div className="bg-yellow-400 min-h-screen">

            <div className="max-w-5xl mx-auto p-6 md:p-10 min-h-screen bg-red-700 shadow-2xl">

                <Header />
                <SearchBar />

                <main className="flex flex-col items-center w-full">
                    {isTyping ? (
                        <div className="flex flex-col items-center justify-center py-20">
                            <div className="text-white text-2xl animate-pulse font-bold italic">
                                Keep typing...
                            </div>
                            <p className="text-gray-300 mt-2">Hit enter once you’ve got the full name!</p>
                        </div>
                    ) : loading ? (
                        <PokemonLoader />
                    ) : error ? (
                        <PokemonErrorModal
                            error={error}
                            onClose={handleCloseError}
                        />
                    ) : (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center w-full">
                                {pokemonList.map(p =>
                                    <PokemonCard key={p.id} pokemon={p} />
                                )}
                            </div>

                            {pokemonList.length > 0 && (
                                <div className="flex justify-center mt-12 mb-6">
                                    <ConfigProvider
                                        theme={{
                                            components: {
                                                Pagination: {
                                                    colorPrimary: '#facc15',
                                                    colorPrimaryHover: '#fde047',
                                                    itemActiveColor: '#dc2626',
                                                    colorText: '#ffffff',
                                                    itemActiveBg: '#facc15',
                                                    colorBgContainer: 'transparent',
                                                },
                                            },
                                        }}
                                    >
                                        <Pagination
                                            current={currentPage}
                                            pageSize={20}
                                            total={1118}
                                            onChange={onPageChange}
                                            showSizeChanger={false}
                                            className="pokemon-pagination"
                                        />
                                    </ConfigProvider>
                                </div>
                            )}
                        </>
                    )}
                </main>
            </div>
        </div>
    );
}

export default Home;