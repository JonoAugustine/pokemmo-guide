import React from 'react'
import { BreedingItem } from './BreedingItem'

export function BreedingRow({ ivs, row, count }) {

    return (
        <div className='d-flex' style={{ gap: '.5rem' }}>
            {
                [...Array(count)].map((_, index, array) => {
                    return <BreedingItem
                        key={`${index}-${row}`}
                        maxItems={array.length}
                        row={row}
                        index={index}
                        ivsTable={ivs}
                    ></BreedingItem>
                })
            }
        </div>
    )
}
