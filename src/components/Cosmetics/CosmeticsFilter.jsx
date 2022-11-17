import React from 'react'
import { CosmeticList } from './CosmeticList';
import { cosmeticsArrays } from '../../data/cosmetics';
import { pokedex } from '../../data/pokedex'
import { Typography } from '../Atoms';
import { Form } from 'react-bootstrap';

export const CosmeticsFilter = ({ selectedClothes, onCosmeticSelect }) => {

    return (
        <div>
            <div className='d-flex flex-wrap flex-basis-1 mb-2' style={{ gap: '.8rem' }}>
                {
                    Object.keys(cosmeticsArrays)
                        .map(slotId => {
                            return (
                                cosmeticsArrays[slotId]
                                    ? <CosmeticList slotId={slotId} onCosmeticSelect={onCosmeticSelect} selectedClothes={selectedClothes[slotId]} />
                                    : null

                            )
                        })
                }
                <div className='d-flex align-items-end' style={{ gap: '.5rem' }}>
                    <div>
                        <Typography as="p" className='text-muted mb-0' style={{ fontSize: '.8rem' }}>Followers</Typography>
                        <Form.Select
                            size="sm"
                            style={{ width: 'auto' }}
                            onChange={({ target }) => onCosmeticSelect('follower', target.value.toLowerCase())}
                        >
                            <option value="">---</option>
                            {
                                pokedex.map(({ name }) => (
                                    <option value={name}>{name}</option>
                                ))
                            }
                        </Form.Select>
                    </div>
                    <Form.Check
                        inline
                        name="encounter-type"
                        type='checkbox'
                        id="shiny"
                        label="Shiny"
                        onChange={event => onCosmeticSelect('shiny', event.target.checked)}
                    />
                </div>
            </div>
        </div >
    )
}
