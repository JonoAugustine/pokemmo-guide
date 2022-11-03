import { pokedex } from '../data/pokedex'

export const getPokemonEvolutions = (id) => {
    const pkmn = pokedex.find(pkmn => pkmn.id === id)
    if (pkmn) return pkmn.evoTree
}

export function getPokemonName(id) {
    const pkmn = pokedex.find(pkmn => pkmn.id === id)
    if (pkmn) return pkmn.name
}