import React from 'react'
import { Table } from '../Atoms'

export const PokemonBaseStats = ({ hp, atk, def, spatk, spdef, spe }) => {
    return (
        <Table responsive hover size="sm">
            <thead>
                <tr>
                    <th>HP</th>
                    <th>Attack</th>
                    <th>Defense</th>
                    <th>Sp. Atk</th>
                    <th>Sp. Def</th>
                    <th>Speed</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{hp}</td>
                    <td>{atk}</td>
                    <td>{def}</td>
                    <td>{spatk}</td>
                    <td>{spdef}</td>
                    <td>{spe}</td>
                </tr>
            </tbody>
        </Table>
    )
}
