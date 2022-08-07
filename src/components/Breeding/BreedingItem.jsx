import React, { useEffect, useState } from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { useBreeding } from '../../context/BreedingContext'
import { breedingTable } from '../../data/breedingTable'
import { IV_COLORS } from '../../data/ivs'

export function BreedingItem({ row, index, ivsTable, maxItems }) {

    const { breds, setAsBred, removeBred } = useBreeding()

    const [isBred, setIsBred] = useState(false)
    const ivSet = breedingTable[row][index].map(item => item === 1 ? 'nat' : ivsTable[item])

    useEffect(() => {
        if (!breds) return
        setIsBred(breds.find(bred => bred.col === index && bred.row === row))
    }, [breds])

    return (
        <div style={{ flexBasis: `${100 / maxItems}%` }}>
            <div
                onClick={() => !isBred
                    ? setAsBred({ row, col: index })
                    : removeBred({ row, col: index })}
                title={ivSet.join(' ')}
                className='d-flex mx-auto'
                style={{
                    width: `${.5 * row}rem`,
                    height: `${.5 * row}rem`,
                    borderRadius: '10rem',
                    overflow: 'hidden',
                    opacity: isBred ? '.3' : '1'
                }}>
                {
                    ivSet.map(item => (
                        <div
                            key={item}
                            style={{ background: IV_COLORS[item], height: "100%", flexGrow: 1 }}></div>
                    ))
                }
            </div>
        </div>
    )
}
