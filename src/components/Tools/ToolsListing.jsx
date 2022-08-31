import { Link } from 'gatsby'
import React from 'react'
import { Button, Image } from 'react-bootstrap'
import { EggIcon, PokedexIcon, ShinyIcon } from '../../assets/icons'

const TOOLS = [
    {
        label: 'Breeding',
        url: '/tools/breeding',
        icon: EggIcon
    },
    {
        label: 'Pokedex',
        url: '/tools/pokedex',
        icon: PokedexIcon
    }
]

export const ToolsListing = () => {
    return (
        <div className="d-flex" style={{ gap: '1rem' }}>
            {
                TOOLS.map(({ label, url, icon }) => {
                    return (
                        <Button key={label} as={Link} to={url} className="d-inline-flex align-items-center" style={{ gap: '.3rem' }}>
                            <Image style={{ height: '1.5em', width: '1.5em' }} src={icon} />
                            {label}
                        </Button>
                    )
                })
            }
        </div>
    )
}

