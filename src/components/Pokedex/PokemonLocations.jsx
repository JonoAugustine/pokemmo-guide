import React from 'react'
import { usePokedex } from '../../context/PokedexContext'
import { Table } from '../Atoms';


export const PokemonLocations = ({ locations }) => {
    const { filters } = usePokedex();

    return (
        <div>

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
                                if (filters.region && !location.region.includes(filters.region)) return false;
                                if (filters.route && !location.route.includes(filters.route)) return false;
                                if (filters.hasHorde && location.rarity !== 'horde') return false
                                return true
                            })
                            .map((location, index) => (
                                <tr key={index}>
                                    <td className='text-capitalize'>{location.region}</td>
                                    <td className='text-capitalize'>
                                        {location.route}
                                    </td>
                                    <td className='text-capitalize'>{location.rarity}</td>
                                    <td className='text-capitalize'>{location.type}</td>
                                    <td className='text-capitalize'>{location.level}</td>
                                </tr>
                            ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
