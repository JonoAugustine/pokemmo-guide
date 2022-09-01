import React from 'react'
import { TbPokeball } from 'react-icons/tb'
import { Button } from '../Atoms'

export const ShowLocationsToggle = ({ onClick, show, title = "Locations", size = "sm" }) => {
    return (
        <Button
            variant="outline-info"
            size={size}
            className="d-flex align-items-center"
            style={{ gap: '.3rem' }}
            onClick={() => onClick()}
        >
            {
                show ? 'Hide ' : 'Show '
            }
            {title}
            <TbPokeball style={{ fontSize: '1rem' }} />
        </Button>
    )
}
