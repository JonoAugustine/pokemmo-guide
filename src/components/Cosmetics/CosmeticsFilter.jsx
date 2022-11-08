import React from 'react'
import { Form } from 'react-bootstrap';
import { cosmeticsArrays } from '../../data/cosmetics';
import { InterfaceItems } from '../../interface/items'
import { getItemInfo } from '../../utils/items';
import { Typography } from '../Atoms';

export const CosmeticsFilter = ({ selectedClothes, onCosmeticSelect }) => {

    const getSlotName = (slotId) => InterfaceItems.slot[slotId]

    return (
        <div>
            <div className='d-flex flex-wrap flex-basis-1 mb-2' style={{ gap: '.5rem' }}>
                {
                    Object.keys(cosmeticsArrays)
                        .map(slotId => {
                            return (
                                cosmeticsArrays[slotId]
                                    ? <div>
                                        <Typography as="p" className='text-muted mb-0' style={{ fontSize: '.8rem', textTransform: "capitalize" }}>{getSlotName(slotId)}</Typography>
                                        <Form.Select
                                            size="sm"
                                            style={{ width: 'auto' }}
                                            onChange={({ target }) => onCosmeticSelect(slotId, target.value)}
                                        >
                                            <option value={0}>---</option>
                                            {
                                                cosmeticsArrays[slotId]
                                                    .map(({ item_id }) => {
                                                        const { en_name } = getItemInfo(item_id)
                                                        return <option selected={selectedClothes[slotId] === item_id} value={item_id} key={item_id}>{en_name}</option>
                                                    })
                                            }
                                        </Form.Select>
                                    </div>
                                    : null

                            )
                        })
                }
            </div>
        </div >
    )
}
