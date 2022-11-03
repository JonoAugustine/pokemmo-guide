import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { Stack } from 'react-bootstrap'
import { PathItem } from './PathItem'
import { RealEggIcon } from '../../assets/icons'

export const PathRow = ({ sprites, path, choosenPkmnSprite }) => {
    return (
        <Stack direction="horizontal" className="mb-4 overflow-scroll" style={{ gap: '.5rem' }}>
            {
                path.map((item) => (
                    <>
                        <PathItem pokemon={item} sprites={sprites} />
                        <img style={{ maxWidth: '20px' }} src={RealEggIcon} alt={"Breed with"} />
                    </>
                ))
            }
            <div className='flex-shrink-0 fake-background'>
                <GatsbyImage style={{ maxWidth: '80px' }} image={choosenPkmnSprite.node.childImageSharp.gatsbyImageData} />
            </div>
        </Stack>
    )
}
