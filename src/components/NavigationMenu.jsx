import React from 'react';
import { Nav, Offcanvas } from 'react-bootstrap';
import { useNavigationMenu } from '../context/NavigationMenuContext';
import { NavLink } from './NavLink';

export function NavigationMenu({ show, handleClose }) {
    const { NAVIGATION_MENU_ITEMS } = useNavigationMenu();
    return (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Pokemmo Guides</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav variant='pills' className="flex-column" onSelect={handleClose}>
                    <Nav.Item className='mt-3 mb-2'>Utility Pokemon</Nav.Item>
                    <Nav.Item className="mt-3 mb-2">Tools</Nav.Item>
                    {
                        NAVIGATION_MENU_ITEMS.TOOLS.map(({ label, url }, index) => (
                            <NavLink onClick={handleClose} key={index} to={url}>{label}</NavLink>
                        ))
                    }
                    <Nav.Item className='mt-3 mb-2'>Useful resources</Nav.Item>
                    {
                        NAVIGATION_MENU_ITEMS.EXTERNAL_RESOURCES.map(({ label, url }, index) => (
                            <NavLink onClick={handleClose} key={index} to={url} target="_blank">{label}</NavLink>
                        ))
                    }
                </Nav>
            </Offcanvas.Body>
        </Offcanvas>
    )
}