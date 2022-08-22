import React, { useEffect, useState } from 'react'
import { useBreeding } from '../../context/BreedingContext'
import { breedingTable } from '../../data/breedingTable'
import { IV_COLORS } from '../../data/ivs'

import * as breedingStyle from "./breeding.module.css"

export function BreedingItem({ row, index, maxItems, maxRows }) {
    const { breds, setAsBred, removeBred, breedingConfig } = useBreeding()
    const [isBred, setIsBred] = useState(false)

    const baseSize = 3 / maxRows;
    const isOdd = index % 2 === 0

    const requestedIv = `iv${breedingConfig.ivsCount}`

    const breedingRequested = breedingConfig.nature
        ? breedingTable.nature[requestedIv]
        : breedingTable.random[requestedIv]

    const ivSet = breedingRequested[row + 1][index].map(item => item === 0 ? 'nat' : breedingConfig.iv[item])

    useEffect(() => {
        if (!breds) return
        setIsBred(breds.find(bred => bred.col === index && bred.row === row + 1))
    }, [breds, index, row])

    return (
        <div style={{ flexBasis: `${100 / maxItems}%` }} data-item-size={`${(baseSize * row + 1) / 2}rem`} className={breedingStyle.breedingItem}>
            <div
                onClick={() => !isBred
                    ? setAsBred({ row: row + 1, col: index })
                    : removeBred({ row: row + 1, col: index })}
                title={ivSet.join(' ')}
                className='d-flex mx-auto'
                style={{
                    width: `${baseSize * row + 1}rem`,
                    height: `${baseSize * row + 1}rem`,
                    borderRadius: '10rem',
                    overflow: 'hidden',
                    border: isBred ? '3px solid' : 'none'
                }}>
                {
                    ivSet.map(item => (
                        <div
                            key={item}
                            style={{ background: IV_COLORS[item], height: "100%", flexGrow: 1 }}></div>
                    ))
                }
            </div>
            {
                isOdd
                    ? <div
                        className={breedingStyle.breedingTournamentRow}
                        style={{
                            width: `calc(100% - ${(baseSize * row + 1) / 2}rem)`,
                            left: `calc(50% + ${(baseSize * row + 1) / 2}rem)`
                        }}
                    ></div>
                    : <div
                        className={breedingStyle.breedingTournamentCol}
                        style={{ left: '-.35rem' }}
                    ></div>
            }
        </div>
    )
}
