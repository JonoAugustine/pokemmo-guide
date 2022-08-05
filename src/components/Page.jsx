import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export function Page({ children }) {
    return (
        <Container>
            <Row>
                <Col>
                    {children}
                </Col>
            </Row>
        </Container>
    )
}
