import React from 'react'
import { Container } from 'react-bootstrap'
import { Button, Typography } from './Atoms'

export const Footer = () => {
    return (
        <Container className="mt-auto border-top py-2">
            <div className='d-flex flex-wrap align-items-center justify-content-between' style={{ gap: '.5rem' }}>
                <Typography className="mb-0 me-1">
                    Made with ❤️ in Livorno, Italy <br></br>
                    Discord: <Typography as="span" className="fw-bold" style={{ color: '#5865f2' }}>gianemi2#0920</Typography>
                </Typography>
                <div className="d-flex flex-wrap" style={{ gap: '.5rem' }}>
                    <Button size="sm" variant="success" href="https://ko-fi.com/gianemi2" target="_blank">Buy me a Coffee</Button>
                    <Button size="sm" variant="info" href="https://github.com/gianemi2" target="_blank">Github</Button>
                </div>
            </div>
        </Container>
    )
}
