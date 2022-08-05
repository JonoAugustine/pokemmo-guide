import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'gatsby'

export function NavLink({ to, onClick, children, target = '_self' }) {
    return (
        <Nav.Item>
            <Nav.Link target={target} as={Link} to={to} onClick={onClick}>{children}</Nav.Link>
        </Nav.Item>
    )
}