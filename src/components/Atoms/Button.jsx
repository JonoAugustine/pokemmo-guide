import React from 'react'
import { Button as ButtonBS } from 'react-bootstrap'
import { useDarkMode } from '../../context/DarkModeContext'

export const Button = ({ children, className, style, variant = 'primary', ...props }) => {
    const { theme } = useDarkMode()
    return (
        <ButtonBS
            variant={
                variant.includes('outline-primary')
                    ? theme === 'dark' ? 'outline-secondary' : 'outline-primary'
                    : variant.includes('primary')
                        ? theme === 'dark' ? 'secondary' : 'primary'
                        : variant
            }
            className={`${className} d-inline-flex align-items-center`}
            style={{ ...style, gap: '.25rem' }}
            {...props}
        >
            {children}
        </ButtonBS>
    )
}
