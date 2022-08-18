import React from 'react'

export function PageTitle({ credits, children }) {
    return (
        <div className='mb-3 mt-2'>
            <h1>{children}</h1>
            {
                credits
                    ? <p className='text-muted'>Guide made by: {credits}</p>
                    : false
            }

        </div>

    )
}