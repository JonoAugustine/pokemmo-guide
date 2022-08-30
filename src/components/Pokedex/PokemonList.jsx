import React, { useState } from 'react'
import { PokemonItem } from './PokemonItem'
import { pokedex } from '../../data/pokedex'

export const PokemonList = ({ sprites, filters }) => {
    console.log(filters)
    return (
        pokedex
            .filter(pokemon => {
                if (!filters) return true;
                if (filters.region) {
                    if (!pokemon.locations.find(loc => loc.region === filters.region)) return false;
                }
                if (filters.route) {
                    if (!pokemon.locations.find(loc => {
                        if (!filters.hasHorde) return loc.route === filters.route

                        return loc.route === filters.route && loc.rarity === 'horde'
                    })) {
                        return false;
                    }
                }
                if (filters.eggGroup) {
                    if (!pokemon.group.includes(filters.eggGroup)) return false;
                }
                if (filters.hasHorde) {
                    if (!pokemon.locations.find(loc => loc.rarity === 'horde')) return false;
                }
                return true;
            })
            .map(pokemon => {
                const sprite = sprites.find(({ node }) => node.name == pokemon.id)
                if (!sprite) return;
                return <PokemonItem key={pokemon.name} {...pokemon} sprite={sprite} />
            })

    )
}