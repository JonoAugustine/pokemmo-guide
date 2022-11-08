import React from 'react'
import { Image } from 'react-bootstrap'
import { Badge } from '../Atoms'

export const AvatarList = ({ images }) => {

    return (
        <div className='d-flex flex-wrap' style={{ gap: '2rem' }}>
            {
                images.map(({ url, name }) => (
                    <div className='d-flex flex-column align-items-center justify-content-center' style={{ gap: '.5rem', flex: 1 }}>
                        <Image rounded style={{ height: '80px', border: '1px solid' }} src={url} alt={name}></Image>
                        <Badge pill>{name}</Badge>
                    </div>
                ))
            }
        </div>
    )
}
