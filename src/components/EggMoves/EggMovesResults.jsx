import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import { Stack } from 'react-bootstrap'
import { getPokemonName } from '../../utils/getPokemonName'
import { Button, Card, Typography } from '../Atoms'
import { PathResult } from './PathResult'

export const EggMovesResults = ({ sprites, eggMove }) => {
    const pokemonName = getPokemonName(eggMove.id)
    const [paths, setPaths] = useState([])
    const sprite = eggMove.id ? sprites.find(({ node }) => parseInt(node.name) === eggMove.id) : false;

    return (
        <Card className="rounded p-3">
            <Stack gap="3" direction="horizontal" className="align-items-center">
                <GatsbyImage style={{ maxWidth: '80px' }} image={sprite.node.childImageSharp.gatsbyImageData} alt={pokemonName} />
                <Stack gap="2">
                    <Typography as="h4" className="mb-0">{pokemonName}</Typography>
                    <Stack direction="horizontal" gap="2">
                        {
                            eggMove.moves.map((move, index) => (
                                <Button onClick={() => setPaths(move.paths)} key={index}>{move.name}</Button>
                            ))
                        }
                    </Stack>
                </Stack>
            </Stack>
            {
                paths.length ? <PathResult paths={paths} /> : false
            }
        </Card>
    )
}
