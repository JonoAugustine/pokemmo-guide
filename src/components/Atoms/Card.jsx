import React from 'react'
import { Card as CardBS } from 'react-bootstrap'
import { useDarkMode } from '../../context/DarkModeContext'

export const Card = ({ children, ...props }) => {
    const { theme } = useDarkMode()
    return (
        <CardBS bg={theme} text={theme === 'dark' ? 'light' : 'dark'} {...props}>
            {children}
        </CardBS>
    )
}
