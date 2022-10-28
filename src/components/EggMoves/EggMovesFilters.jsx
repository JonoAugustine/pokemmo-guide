import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react'
import { getPokemonName } from '../../utils/getPokemonName'
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
                    data.map(item => (
                        {
                            id: item.id,
                            name: getPokemonName(item.id),
                            sprite: sprites.find(({ node }) => parseInt(node.name) === item.id)
                        }
                    ))
                }
                formatResult={formatResult}
                onSelect={item => onFilter(item.id)}
            />
        </div>
        //data.map(item => getPokemonName(item.id))
    )
}