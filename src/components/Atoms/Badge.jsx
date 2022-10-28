import React from 'react'
import { Badge as BadgeBs } from 'react-bootstrap'
import { useDarkMode } from '../../context/DarkModeContext'

export const Badge = ({ children, ...props }) => {
    const { isDark } = useDarkMode()
    return (
        <BadgeBs bg={isDark ? 'secondary' : 'primary'} {...props}>
            {children}
        </BadgeBs>
    )
}
