import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

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
