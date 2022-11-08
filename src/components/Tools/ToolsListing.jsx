import { Link } from 'gatsby'
import React from 'react'
import { Image } from 'react-bootstrap'
import { CosmeticsIcon, EggIcon, EggMovesIcon, PokedexIcon } from '../../assets/icons'
import { Badge, Button } from '../Atoms'

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
    },
    {
        label: 'Egg Moves Calculator',
        url: '/tools/egg-moves-calculator',
        icon: EggMovesIcon,
        highlight: true
    },
    {
        label: 'Cosmetics Helper',
        url: '/tools/cosmetics',
        icon: CosmeticsIcon,
        highlight: true
    }
]

export const ToolsListing = () => {
    return (
        <div className="d-flex  flex-wrap" style={{ gap: '1rem' }}>
            {
                TOOLS.map(({ label, url, icon, highlight }) => {
                    return (
                        <Button variant={highlight ? 'info' : 'primary'} key={label} as={Link} to={url} className="d-inline-flex align-items-center" style={{ gap: '.3rem' }}>
                            <Image style={{ height: '1.5em', width: '1.5em' }} src={icon} />
                            {label}
                            {highlight ? <Badge className="ms-1" style={{ fontSize: '.6rem', color: 'black' }} bg="warning" pill>NEW</Badge> : false}
                        </Button>
                    )
                })
            }
        </div>
    )
}

