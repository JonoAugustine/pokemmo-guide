import React, { useState } from 'react'
import { PokemonItem } from './PokemonItem'
import { pokedex } from '../../data/pokedex'

export const PokemonList = ({ sprites }) => {
    const [filters, setFilters] = useState({})
    console.log(pokedex)

    return (
        pokedex
            .map(pokemon => {
                const sprite = sprites.find(({ node }) => node.name == pokemon.id)
                if (!sprite) return;
                return <PokemonItem {...pokemon} sprite={sprite} />
            })

    )
}