import React, { useState } from 'react'
import { Button } from '../Atoms'
import { GymEarningMultiplier } from './GymEarningMultiplier'
import { RegionsLevelCap } from './RegionsLevelCap'

const QUICK_INFO_LISTS = [
    {
        label: 'Regions Level Cap',
        id: 'regions-level-cap',
        component: <RegionsLevelCap />
    },
    {
        label: "Amulet Coins Earnings",
        id: 'amulet-coins-earnings',
        component: <GymEarningMultiplier />
    }
]

export const QuickInfoListing = () => {
    const [quickInfo, setQuickInfo] = useState(false)

    return (
        <div>
            <div className="d-flex mb-3" style={{ gap: '1rem' }}>
                {
                    QUICK_INFO_LISTS.map(({ label, id }, index) => {
                        return (
                            <Button active={quickInfo === id ? true : false} key={index} onClick={() => setQuickInfo(prev => prev === id ? false : id)} className="d-inline-flex align-items-center" style={{ gap: '.3rem' }} variant="warning">
                                {label}
                            </Button>
                        )
                    })
                }
            </div>
            {
                quickInfo && QUICK_INFO_LISTS.length
                    ? QUICK_INFO_LISTS.find(({ id }) => id === quickInfo).component
                    : false
            }
        </div>
    )
}
