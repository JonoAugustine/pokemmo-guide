import React from 'react'
import { useDarkMode } from '../../context/DarkModeContext'

export const Typography = ({ children, as = 'p', highlight = false, className = '', ...props }) => {
    const { theme } = useDarkMode()
    const As = highlight ? 'span' : as
    return (
        <As
            {...props}
            className={`${className} ${theme === 'dark' ? 'text-light' : 'text-dark'} ${highlight ? 'fw-bold fs-5' : ''}`}
        >
            {children}
        </As>
    )
}
