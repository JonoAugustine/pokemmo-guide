import React, { useCallback } from 'react'
import { useLocalStorage } from "../hooks/useLocalStorage";
import { createContext, useContext, useEffect, useState } from "react";

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
    }, [isDark])

    const toggleDarkMode = () => {
        setIsDark(!isDark)
    }

    return (
        <DarkModeContext.Provider value={{ isDark, toggleDarkMode, theme }}>
            {children}
        </DarkModeContext.Provider>
    )
}