import React from 'react'
import { CosmeticList } from './CosmeticList';
import { cosmeticsArrays } from '../../data/cosmetics';

export const CosmeticsFilter = ({ selectedClothes, onCosmeticSelect }) => {

    return (
        <div>
            <div className='d-flex flex-wrap flex-basis-1 mb-2' style={{ gap: '.8rem' }}>
                {
                    Object.keys(cosmeticsArrays)
                        .map(slotId => {
                            return (
                                cosmeticsArrays[slotId]
                                    ? <CosmeticList slotId={slotId} onCosmeticSelect={onCosmeticSelect} selectedClothes={selectedClothes} />
                                    : null

                            )
                        })
                }
            </div>
        </div >
    )
}
