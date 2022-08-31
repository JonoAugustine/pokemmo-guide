import React from 'react'
import { ShowLocationsToggle } from './ShowLocationsToggle'
import { usePokedex } from '../../context/PokedexContext'
import { Table } from '../Atoms';

export const PokemonLocations = ({ locations, show, onClose }) => {
    const { filters } = usePokedex();

    return (
        <div style={{ maxHeight: show ? '300px' : '0', overflow: 'scroll', transition: '.3s' }}>
            <div className='border-top'></div>
            <div className='p-2'>

                <Table responsive hover size="sm" style={{ border: '1px solid transparent' }}>
                    <thead className='border-bottom' style={{ position: 'sticky', top: 0, background: 'white' }}>
                        <tr>
                            <th>Region</th>
                            <th>Route</th>
                            <th>Rarity</th>
                            <th>Type</th>
                            <th>Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            locations
                                .filter(location => {
                                    if (!filters) return true;
                                    if (filters.region && filters.region !== location.region) return false;
                                    if (filters.route && filters.route !== location.route) return false;
                                    if (filters.hasHorde && location.rarity !== 'horde') return false
                                    return true

                                })
                                .map((location, index) => (
                                    <tr key={index}>
                                        <td className='text-capitalize'>{location.region}</td>
                                        <td className='text-capitalize'>{location.route}</td>
                                        <td className='text-capitalize'>{location.rarity}</td>
                                        <td className='text-capitalize'>{location.type}</td>
                                        <td className='text-capitalize'>{location.level}</td>
                                    </tr>
                                ))
                        }
                    </tbody>
                </Table>
                <ShowLocationsToggle onClick={onClose} show={show} />
            </div>
        </div>
    )
}
