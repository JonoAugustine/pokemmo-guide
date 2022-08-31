import React from 'react'
import { Typography } from './Atoms'

export function PageTitle({ credits, children }) {
    return (
        <div className='mb-3 mt-2'>
            <Typography as="h1">{children}</Typography>
            {
                credits
                    ? <Typography className='text-muted'>Guide made by: {credits}</Typography>
                    : false
            }

        </div>

    )
}