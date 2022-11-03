import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react'
import { getPokemonName, getPokemonEvolutions } from '../../utils/pokemon'
import { Search, Typography } from '../Atoms';

const formatResult = (item) => {
    return (
        <div className="d-flex align-items-center" style={{ gap: '.5rem' }}>
            <GatsbyImage style={{ maxWidth: '40px' }} image={item.sprite.node.childImageSharp.gatsbyImageData} alt={item.name} />
            <Typography className='mb-0'>{item.name}</Typography>
        </div>
    )
}

export const EggMovesFilters = ({ sprites, data, onFilter }) => {

    return (
        <div>
            <Typography className='mb-0' style={{ fontSize: '.95rem' }}>Choose your Pokemon</Typography>
            <Search
                items={
                    data
                        .reduce((prev, item) => {
                            const nextEvolutions = getPokemonEvolutions(item.id)
                            const el = {
                                id: item.id,
                                name: getPokemonName(item.id),
                                sprite: sprites.find(({ node }) => parseInt(node.name) === item.id)
                            };
                            if (!nextEvolutions.future.length) return [...prev, el];

                            const evolutions = nextEvolutions.future.reduce((items, curr) => {
                                if (prev.find(({ id }) => id === curr.id)) return items
                                return [...items, {
                                    id: curr.id,
                                    name: getPokemonName(curr.id),
                                    sprite: sprites.find(({ node }) => parseInt(node.name) === curr.id),
                                    baseId: item.id
                                }]
                            }, [])
                            return [...prev, el, ...evolutions];
                        }, [])

                }
                formatResult={formatResult}
                onSelect={item => onFilter(item.baseId ? item.baseId : item.id)}
            />
        </div>
        //data.map(item => getPokemonName(item.id))
    )
}