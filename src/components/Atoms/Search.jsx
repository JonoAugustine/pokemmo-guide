import React from 'react'
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { useDarkMode } from '../../context/DarkModeContext';

export const Search = (props) => {
    const { isDark } = useDarkMode()
    return (
        <ReactSearchAutocomplete {...props} showIcon={false} styling={isDark ? { ...baseStyle, ...darkModeStyle } : { ...baseStyle }} fuseOptions={{ threshold: 0 }} />
    )
}

const darkModeStyle = {
    backgroundColor: '#212529',
    color: '#f8f9fa',
    lineColor: '#343a40',
    hoverBackgroundColor: '#343a40'
}

const baseStyle = {
    padding: ".375rem .75rem",
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: "#212529",
    backgroundColor: "#fff",
    border: "1px solid #ced4da",
    borderRadius: ".375rem",
    zIndex: 9
}