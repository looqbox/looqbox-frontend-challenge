import { Link } from "react-router";
import { resetToInitial, setIsTyping } from "../store/pokemonSlice";
import { useAppDispatch } from "../hooks/redux";

export const Header = () => {
    const dispatch = useAppDispatch();

    const handleReset = () => {
        dispatch(resetToInitial());
        dispatch(setIsTyping(false));
    };

    return (
        <header className="py-4 mb-6 relative z-50">
            <Link to="/" onClick={handleReset} className="inline-block w-full">
                <div className="flex flex-col items-center cursor-pointer">
                    <div className="flex items-baseline justify-center gap-2 mb-1">
                        <h1 className="text-6xl font-extrabold uppercase text-yellow-300 [text-shadow:5px_5px_0_#000]">
                            Pokédex
                        </h1>
                        <h2 className="text-lg tracking-wide font-black text-white/80 [text-shadow:3px_3px_0_#000]">
                            Gen 1, 2 & 3
                        </h2>
                    </div>
                    <div className="text-white/90 italic font-medium text-lg [text-shadow:2px_2px_0_#000] mt-2">
                        Gotta catch 'em all!
                    </div>
                </div>
            </Link>
        </header>
    );
};