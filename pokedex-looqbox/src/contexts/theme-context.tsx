import { createContext, useState } from "react";

export const themes = {
    light: {
        color: '#010168',
        backgroundColor: '#DCDCDC',
    },
    dark: {
        color: '#DCDCDC',
        backgroundColor: '#010168',
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props: any) => {

    const [ theme, setTheme ] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}