import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { getPokemonName } from '../../utils/pokemon'
import { Badge, Typography } from '../Atoms'

export const PathItem = ({ pokemon, sprites }) => {
    const sprite = sprites.find(({ node }) => parseInt(node.name) === pokemon.id)
    const pokemonName = getPokemonName(pokemon.id)
    return (
        <div className="d-flex flex-column align-items-center justify-content-center flex-shrink-0" style={{ gap: '.5rem' }}>
            <GatsbyImage style={{ maxWidth: '80px' }} image={sprite.node.childImageSharp.gatsbyImageData} alt={pokemonName} />
            <Typography className="text-muted mb-0 text-center">{pokemonName}</Typography>
            <Badge pill>
                {pokemon.method}
            </Badge>
        </div>
    )
}
