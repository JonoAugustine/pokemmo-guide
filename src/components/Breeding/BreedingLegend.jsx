import React from 'react'
import { IV_STATS, IV_COLORS } from '../../data/ivs'

export function BreedingLegend({ ivs }) {
    return (
        <div className="d-flex mt-3" style={{ gap: '1rem' }}>
            {
                Object.values(ivs).map(iv => (
                    <div key={iv} className="d-flex align-items-center" style={{ gap: '.5rem' }}>
                        <div style={{ height: '1rem', width: '1rem', borderRadius: '1rem', backgroundColor: IV_COLORS[iv] }}></div>
                        {IV_STATS.find(({ id }) => id === iv).label}
                    </div>
                ))
            }
            <div className="d-flex align-items-center" style={{ gap: '.5rem' }}>
                <div style={{ height: '1rem', width: '1rem', borderRadius: '1rem', backgroundColor: IV_COLORS['nat'] }}></div>
                Nature
            </div>
        </div>
    )
}
