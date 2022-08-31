import React from 'react'
import { Button } from 'react-bootstrap'
import { TbPokeball } from 'react-icons/tb'

export const ShowLocationsToggle = ({ onClick, show, title = "Locations" }) => {
    return (
        <Button
            variant="outline-primary"
            size="sm"
            className="d-flex align-items-center"
            style={{ gap: '.3rem', fontSize: '.8rem' }}
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
