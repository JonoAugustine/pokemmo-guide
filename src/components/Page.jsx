import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Bulbasaur } from '../assets/icons'

export function Page({ children }) {
    return (
        <Container className="pb-5">
            <Row>
                <Col>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}
