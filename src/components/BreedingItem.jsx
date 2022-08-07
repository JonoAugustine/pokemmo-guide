import React from 'react'
import { breedingTable } from '../data/breedingTable'

const ivBackground = {
    hp: '#0097FF',
    atk: '#FE0006',
    def: '#FC6B04',
    spdef: '#FA05DD',
    spe: '#FED800',
    nat: '#4DFD03'
}

export function BreedingItem({ row, index, ivsTable, maxItems }) {
    const ivSet = breedingTable[row][index].map(item => item === 1 ? 'nat' : ivsTable[item])

    return (
        <div style={{ flexBasis: `${100 / maxItems}%` }}>
            <div className='d-flex mx-auto' style={{ width: `${.5 * row}rem`, height: `${.5 * row}rem`, borderRadius: '10rem', overflow: 'hidden' }}>
                {
                    ivSet.map(item => (
                        <div style={{ background: ivBackground[item], height: "100%", flexGrow: 1 }}></div>
                    ))
                }
            </div>
        </div>
    )
}
