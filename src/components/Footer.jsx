import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Button, Typography } from './Atoms'

export const Footer = () => {
    return (
        <Container className="mt-auto border-top">
            <Row className="align-items-center py-2">
                <Col>
                    <Typography className="mb-0 me-1">Made with ❤️ in Livorno, Italy - <Typography as="span" className="fw-bold" style={{ color: '#5865f2' }}>gianemi2#0920</Typography></Typography>
                </Col>
                <Col className="text-start text-sm-end">
                    <Button size="sm" variant="success" href="https://ko-fi.com/gianemi2" target="_blank" className='me-1'>Buy me a Coffee</Button>
                    <Button size="sm" variant="info" href="https://github.com/gianemi2" target="_blank">Github</Button>
                </Col>
            </Row>
        </Container>
    )
}
