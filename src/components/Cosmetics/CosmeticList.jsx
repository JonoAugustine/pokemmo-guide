import React from 'react'
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { cosmeticsArrays } from '../../data/cosmetics';
import { InterfaceItems } from '../../interface/items'
import { getItemInfo } from '../../utils/items';
import { Typography } from '../Atoms';
import { SwatchColorPicker } from './SwatchColorPicker';

export const CosmeticList = ({ selectedClothes, onCosmeticSelect, slotId }) => {
    const [clothes, setClothes] = useState(false);
    const getSlotName = (slotId) => InterfaceItems.slot[slotId]

    const updateClothes = (cosmeticId) => {
        onCosmeticSelect(slotId, cosmeticId)
        const cosmeticInfo = cosmeticsArrays[slotId].find(({ item_id }) => item_id === cosmeticId)
        setClothes(cosmeticInfo);
    }

    const updateClothesColor = (color_id) => {
        onCosmeticSelect(slotId, `${clothes.item_id}-${color_id}`)
    }

    return (
        <div>
            <Typography as="p" className='text-muted mb-0' style={{ fontSize: '.8rem', textTransform: "capitalize" }}>{getSlotName(slotId)}</Typography>
            <div className="d-flex" style={{ gap: '.3rem' }}>
                <Form.Select
                    size="sm"
                    style={{ width: 'auto' }}
                    onChange={({ target }) => updateClothes(parseInt(target.value))}
                    defaultValue={selectedClothes[slotId]}
                >
                    <option value={0}>---</option>
                    {
                        cosmeticsArrays[slotId]
                            .map(({ item_id }) => {
                                const { en_name } = getItemInfo(item_id)
                                return <option value={item_id} key={item_id}>{en_name}</option>
                            })
                    }
                </Form.Select>
                {clothes && clothes.attribute === 8 ? <SwatchColorPicker onUpdateClothesColor={updateClothesColor} /> : null}
            </div>
        </div>
    )
}
