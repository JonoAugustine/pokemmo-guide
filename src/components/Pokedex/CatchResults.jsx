import React, { useState } from 'react'
import { Button, Stack } from 'react-bootstrap'

import { PokeBall, PokeBallSleep, MegaBall, MegaBallSleep, UltraBall, UltraBallSleep, BisBall, BisBallSleep } from '../../assets/icons'
import { TbArrowsRightLeft } from 'react-icons/tb'


const ASSETS = {
    pokeball: {
        sleep: <img src={PokeBallSleep} style={{ height: "2rem", aspectRatio: '1' }} />,
        healthy: <img src={PokeBall} style={{ height: "2rem", aspectRatio: '1' }} />
    },
    megaball: {
        sleep: <img src={MegaBallSleep} style={{ height: "2rem", aspectRatio: '1' }} />,
        healthy: <img src={MegaBall} style={{ height: "2rem", aspectRatio: '1' }} />
    },
    ultraball: {
        sleep: <img src={UltraBallSleep} style={{ height: "2rem", aspectRatio: '1' }} />,
        healthy: <img src={UltraBall} style={{ height: "2rem", aspectRatio: '1' }} />
    },
    bisball: {
        sleep: <img src={BisBallSleep} style={{ height: "2rem", aspectRatio: '1' }} />,
        healthy: <img src={BisBall} style={{ height: "2rem", aspectRatio: '1' }} />
    }
}

const BALLS = [
    'pokeball',
    'megaball',
    'ultraball',
    'bisball'
]

export const CatchResults = ({ results }) => {
    const [activeBall, setActiveBall] = useState(0);

    const changeActiveBall = () => {
        setActiveBall(prev => activeBall >= BALLS.length - 1 ? 0 : prev + 1)
    }

    return (
        <Stack direction="horizontal" gap={2} className="border-top p-2">
            <div
                className='d-flex align-items-center justify-content-center shadow rounded-circle bg-primary text-light'
                style={changeActiveBallStyles}
                onClick={() => changeActiveBall()}>
                <TbArrowsRightLeft />
            </div>
            {
                results
                    .filter(({ ball }) => ball === BALLS[activeBall])
                    .map((result, index) => {
                        return (
                            <div key={index} className='d-flex align-items-center px-2 flex-wrap justify-content-center text-center text-md-start' style={{ gap: '.5rem' }}>
                                <div className='position-relative'>
                                    {result.status ? ASSETS[result.ball].sleep : ASSETS[result.ball].healthy}
                                </div>
                                <div className='d-flex flex-column'>
                                    <b>{result.hp > 1 ? 'Full HP' : '1 HP'}</b>
                                    {`${result.probabilities} %`}
                                </div>
                            </div>
                        )
                    })
            }
        </Stack>
    )
}

const changeActiveBallStyles = { height: '1.5rem', width: '1.5rem', fontSize: '.7rem', cursor: 'pointer' }