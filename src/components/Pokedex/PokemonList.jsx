import React, { useState } from 'react'
import { PokemonItem } from './PokemonItem'
import { pokedex } from '../../data/pokedex'
import InfiniteScroll from 'react-infinite-scroller'
import { Spinner } from 'react-bootstrap';
import { usePokedex } from '../../context/PokedexContext';
import { Card } from '../Atoms';
import { useMemo } from 'react';

const POKEMON_PER_PAGE = 50;

const filterByName = (name, pokemon) => {
    return pokemon.name.toLowerCase().includes(name.toLowerCase().replace(' ', ''));
}

const filterByLocation = (region, route, pokemon) => {
    if (!region && !route) return true;
    return pokemon.locations.find(loc => {
        if (region && route) {
            return loc.region === region && loc.route === route;
        } else if (region) {
            return loc.region === region
        } else if (route) {
            return loc.route === route
        }
    })
}

const filterByEggGroup = (eggGroup, pokemon) => pokemon.group.includes(eggGroup) && pokemon.locations.length
const filterByEncounterType = (pokemon, isPheno) => pokemon.locations.find(loc => isPheno ? loc.rarity === 'special' : loc.rarity === 'horde')

const filterPokedex = (pokedex, filters) => {
    return pokedex
        .filter(pokemon => {
            return filters.name ? filterByName(filters.name, pokemon) : true
        })
        .filter(pokemon => {
            return filterByLocation(filters.region, filters.route, pokemon)
        })
        .filter(pokemon => {
            return filters.eggGroup ? filterByEggGroup(filters.eggGroup, pokemon) : true
        })
        .filter(pokemon => {
            return filters.hasHorde || filters.isPheno ? filterByEncounterType(pokemon, filters.isPheno) : true
        })
}

export const PokemonList = ({ sprites }) => {
    const [maxCount, setMaxCount] = useState(POKEMON_PER_PAGE);
    const { filters } = usePokedex()
    const pokemonList = useMemo(() => filterPokedex(pokedex, filters), [filters])

    const hasMore = maxCount < pokemonList.length

    return (
        <InfiniteScroll
            hasMore={hasMore}
            loadMore={() => setMaxCount(prev => prev + POKEMON_PER_PAGE)}
            loader={<Spinner key={0} animation="grow" />}
        >
            {
                pokemonList.length > 0
                    ? pokemonList
                        .splice(0, maxCount)
                        .map(pokemon => {
                            const sprite = sprites.find(({ node }) => parseInt(node.name) === parseInt(pokemon.id))
                            if (!sprite) return false;
                            return <PokemonItem key={pokemon.name} {...pokemon} sprite={sprite} />
                        })
                    : <Card body>No results found...</Card>
            }
        </InfiniteScroll>

    )
}