import React from 'react'
import { useDarkMode } from '../../context/DarkModeContext'

export const Typography = ({ children, as = 'p', highlight = false, className = '', style = {}, ...props }) => {
    const { theme } = useDarkMode()
    const As = highlight ? 'span' : as
    return (
        <As
            {...props}
            style={style}
            className={`${className} ${!style.color ? theme === 'dark' ? 'text-light' : 'text-dark' : ''} ${highlight ? 'fw-bold fs-5' : ''}`}
        >
            {children}
        </As>
    )
}
