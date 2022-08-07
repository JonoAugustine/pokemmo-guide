import React from 'react'
import { BreedingLegend } from './BreedingLegend'
import { BreedingRow } from './BreedingRow'

export function BreedingList({ ivs }) {
    return (
        <div className='d-flex flex-column' style={{ gap: '1.5rem' }}>
            <BreedingLegend ivs={ivs} />
            <BreedingRow ivs={ivs} row={6} count={1} />
            <BreedingRow ivs={ivs} row={5} count={2} />
            <BreedingRow ivs={ivs} row={4} count={4} />
            <BreedingRow ivs={ivs} row={3} count={8} />
            <BreedingRow ivs={ivs} row={2} count={16} />
            <BreedingRow ivs={ivs} row={1} count={32} />
        </div>
    )
}
