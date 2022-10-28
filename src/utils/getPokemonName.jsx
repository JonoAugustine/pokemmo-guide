import { pokedex } from '../data/pokedex'

export function getPokemonName(id) {
    return pokedex.find(pkmn => pkmn.id === id).name
}