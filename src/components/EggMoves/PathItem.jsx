import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { getPokemonName } from '../../utils/pokemon'
import { Badge } from '../Atoms'

export const PathItem = ({ pokemon, sprites }) => {
    const sprite = sprites.find(({ node }) => parseInt(node.name) === pokemon.id)
    const pokemonName = getPokemonName(pokemon.id)
    return (
        <div className="d-flex flex-column align-items-start justify-content-center flex-shrink-0" style={{ gap: '.5rem' }}>
            <GatsbyImage style={{ maxWidth: '80px' }} image={sprite.node.childImageSharp.gatsbyImageData} alt={pokemonName} />
            <Badge className="mx-auto" pill>
                {pokemon.method}
            </Badge>
        </div>
    )
}
