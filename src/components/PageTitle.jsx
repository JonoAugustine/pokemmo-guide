import React from 'react'

export function PageTitle({ credits, children }) {
    return (
        <>
            <h1>{children}</h1>
            {
                credits
                    ? <p className='text-muted'>Guide made by: {credits}</p>
                    : false
            }

        </>

    )
}