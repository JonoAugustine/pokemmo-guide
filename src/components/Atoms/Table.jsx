import React from 'react'
import { Table as TableBS } from 'react-bootstrap'
import { useDarkMode } from '../../context/DarkModeContext'

export const Table = ({ children, ...props }) => {
    const { theme } = useDarkMode()
    return (
        <TableBS {...props} variant={theme}>
            {children}
        </TableBS>
    )
}
