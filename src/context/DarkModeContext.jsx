import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { useLocalStorage } from "../hooks/useLocalStorage";

const DarkModeContext = createContext({
    isDark: false,
    theme: 'dark',
    toggleDarkMode: () => null
})

export function useDarkMode() {
    return useContext(DarkModeContext)
}

export function DarkModeProvider({ children }) {

    const [isDark, setIsDark] = useLocalStorage('isDark', false);
    const [theme, setTheme] = useState('dark');

    const getTheme = useCallback(() => {
        if (isDark) return 'dark'
        return 'light'
    }, [isDark]);

    useEffect(() => {
        setTheme(() => getTheme())
    }, [isDark, getTheme])

    const toggleDarkMode = () => {
        setIsDark(!isDark)
    }

    return (
        <DarkModeContext.Provider value={{ isDark, toggleDarkMode, theme }}>
            <Helmet
                bodyAttributes={{
                    class: theme
                }}
            >
                <meta name="theme-color" content={`${theme === 'dark' ? '#212529' : '#f8f9fa'}`} />
            </Helmet>
            {children}
        </DarkModeContext.Provider>
    )
}