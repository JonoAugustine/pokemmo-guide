import { GatsbyImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Stack } from 'react-bootstrap'
import { getPokemonName } from '../../utils/getPokemonName'
import { Button, Card, Typography } from '../Atoms'
import { PathResult } from './PathResult'

export const EggMovesResults = ({ sprites, eggMove, selectedPokemon }) => {
    const pokemonName = getPokemonName(eggMove.id)
    const [paths, setPaths] = useState([])
    const [activeMove, setActiveMove] = useState(false)
    const sprite = eggMove.id ? sprites.find(({ node }) => parseInt(node.name) === eggMove.id) : false;

    useEffect(() => {
        setPaths([])
        setActiveMove(false)
    }, [selectedPokemon])

    const updatePaths = (index, paths) => {
        setActiveMove(index)
        setPaths(paths)
    }

    return (
        <Card className="rounded p-3 pe-0">
            <Stack gap="3" direction="horizontal" className="align-items-center">
                <GatsbyImage style={{ maxWidth: '80px' }} image={sprite.node.childImageSharp.gatsbyImageData} alt={pokemonName} />
                <Stack gap="2">
                    <Typography as="h4" className="mb-0">{pokemonName}</Typography>
                    <Stack direction="horizontal" gap="2" className="flex-wrap">
                        {
                            eggMove.moves.map((move, index) => (
                                <Button
                                    active={index === activeMove}
                                    variant='warning'
                                    onClick={() => updatePaths(index, move.paths)} key={index}>
                                    {move.name}
                                </Button>
                            ))
                        }
                    </Stack>
                </Stack>
            </Stack>
            {
                paths.length ? <PathResult choosenPkmnSprite={sprite} sprites={sprites} paths={paths} /> : false
            }
        </Card>
    )
}
