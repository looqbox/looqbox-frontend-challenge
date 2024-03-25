import { useContext } from "react";
import { ThemeContext, themes } from "../../contexts/theme-context";
import moonImage from '../../assets/moon-icon.png';
import sunImage from '../../assets/sun-icon.png';
import './theme-toggler-button.css'

export const ThemeTogglerButton = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div>
            <button className="theme-button"
            onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}
            style={theme}>
                <img className="theme-icon" alt='light dark theme' src={(theme === themes.light ? sunImage : moonImage)} />
            </button>
        </div>
    )
};
