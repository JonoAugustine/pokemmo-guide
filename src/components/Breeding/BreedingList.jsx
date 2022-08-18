import React from 'react'
import { useBreeding } from '../../context/BreedingContext'
import { BreedingLegend } from './BreedingLegend'
import { BreedingRow } from './BreedingRow'

export function BreedingList({ ivs }) {
    const { breedingConfig } = useBreeding()
    const totalRows = breedingConfig.nature ? breedingConfig.ivsCount + 1 : breedingConfig.ivsCount
    return (
        <div className='d-flex flex-column p-3 mt-4 border border-1' style={{ gap: '1.5rem' }}>
            <BreedingLegend ivs={ivs} />
            {
                [...Array(totalRows)].map((_, index) => {
                    return <BreedingRow
                        key={index}
                        row={index}
                        count={Math.pow(2, totalRows - index - 1)}
                        maxRows={totalRows}
                    />
                })
            }
        </div>
    )
}
