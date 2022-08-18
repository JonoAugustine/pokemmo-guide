import React from 'react'

export const Text = ({ highlight, children }) => {
    return (
        highlight
            ? <span className='fw-bold' style={{ fontSize: '1.2rem' }}>{children}</span>
            : <p>{children}</p>
    )
}
