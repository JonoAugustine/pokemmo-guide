import React from 'react'
import { usePokedex } from '../../context/PokedexContext'
import { ActionToggler } from './ActionToggler'
import { TbPokeball, TbLocation, TbChartBar } from 'react-icons/tb'

export const PokemonActionBar = ({ locations, actions, active, onClick }) => {
    const { TABS } = usePokedex()
    return (
        <div className="d-flex" style={{ gap: ".5rem" }}>
            {
                locations.length
                    ? <>
                        <ActionToggler
                            active={active === TABS.LOCATION ? true : false}
                            onClick={() => onClick(TABS.LOCATION)}
                            icon={<TbLocation />}
                        />
                        <ActionToggler
                            active={active === TABS.CATCH_RATE ? true : false}
                            onClick={() => onClick(TABS.CATCH_RATE)}
                            icon={<TbPokeball />}
                        />
                    </>
                    : false
            }
            {
                <ActionToggler
                    active={active === TABS.STATS ? true : false}
                    onClick={() => onClick(TABS.STATS)}
                    icon={<TbChartBar />}
                />
            }
        </div>

    )
}
