import React from 'react'
import { BreedingItem } from './BreedingItem'

export function BreedingList({ ivs }) {
    return (
        <div className='d-flex flex-column' style={{ gap: '1.5rem' }}>
            <div className='d-flex' style={{ gap: '.5rem' }}>
                {
                    [...Array(1)].map((_, index, array) => {
                        return <BreedingItem maxItems={array.length} row={6} index={index} ivsTable={ivs}></BreedingItem>
                    })
                }
            </div>
            <div className='d-flex' style={{ gap: '.5rem' }}>
                {
                    [...Array(2)].map((_, index, array) => {
                        return <BreedingItem maxItems={array.length} row={5} index={index} ivsTable={ivs}></BreedingItem>
                    })
                }
            </div>
            <div className='d-flex' style={{ gap: '.5rem' }}>
                {
                    [...Array(4)].map((_, index, array) => {
                        return <BreedingItem maxItems={array.length} row={4} index={index} ivsTable={ivs}></BreedingItem>
                    })
                }
            </div>
            <div className='d-flex' style={{ gap: '.5rem' }}>
                {
                    [...Array(8)].map((_, index, array) => {
                        return <BreedingItem maxItems={array.length} row={3} index={index} ivsTable={ivs}></BreedingItem>
                    })
                }
            </div>
            <div className='d-flex' style={{ gap: '.5rem' }}>
                {
                    [...Array(16)].map((_, index, array) => {
                        return <BreedingItem maxItems={array.length} row={2} index={index} ivsTable={ivs}></BreedingItem>
                    })
                }
            </div>
            <div className='d-flex' style={{ gap: '.5rem' }}>
                {
                    [...Array(32)].map((_, index, array) => {
                        return <BreedingItem maxItems={array.length} row={1} index={index} ivsTable={ivs}></BreedingItem>
                    })
                }
            </div>
        </div>
    )
}
