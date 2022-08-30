import React from 'react'
import { Stack } from 'react-bootstrap'

import { PokeBall, PokeBallSleep, MegaBall, MegaBallSleep, UltraBall, UltraBallSleep, BisBall, BisBallSleep } from '../../assets/icons'


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

export const CatchResults = ({ results }) => {
    return (
        <Stack direction="horizontal" gap={2} className="border-top p-2">
            {
                results.map(result => {
                    if (result.ball !== 'pokeball') return;
                    return (
                        <div key={`${result.ball}-${result.sleep}-${result.probabilities}`} className='d-flex align-items-center px-2 flex-wrap justify-content-center text-center text-md-start' style={{ gap: '.5rem' }}>
                            {result.status ? ASSETS[result.ball].sleep : ASSETS[result.ball].healthy}
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
