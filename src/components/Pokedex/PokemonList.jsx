import React, { useState } from 'react'
import { PokemonItem } from './PokemonItem'
import { pokedex } from '../../data/pokedex'
import InfiniteScroll from 'react-infinite-scroller'
import { Spinner } from 'react-bootstrap';
import { usePokedex } from '../../context/PokedexContext';
import { Typography } from '../Atoms';

const POKEMON_PER_PAGE = 50;

const filterPokedex = (pokedex, filters) => {
    return pokedex
        .filter(pokemon => {
            if (!filters) return true;
            if (filters.name) {
                if (!pokemon.name.toLowerCase().includes(filters.name.toLowerCase().replace(' ', ''))) return false;
            }
            if (filters.region) {
                if (!pokemon.locations.find(loc => {
                    if (!filters.hasHorde) return loc.region === filters.region

                    return loc.region === filters.region && loc.rarity === 'horde'
                })) {
                    return false;
                }
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
}

export const PokemonList = ({ sprites }) => {
    const [maxCount, setMaxCount] = useState(POKEMON_PER_PAGE);
    const { filters } = usePokedex()
    const pokemonList = filterPokedex(pokedex, filters)
    console.log(pokemonList);

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
                    : <Typography className="fs-2">No results found...</Typography>
            }
        </InfiniteScroll>

    )
}