import { Link } from 'gatsby'
import React from 'react'
import { Button, Card } from 'react-bootstrap'

export function Post({ frontmatter, excerpt }) {
    return (
        <Card>
            <Card.Img variant="top" />
            <Card.Body>
                <Card.Title>{frontmatter.title}</Card.Title>
                <Card.Text>
                    {excerpt}
                </Card.Text>
                <Button as={Link} to={frontmatter.slug}>Read more</Button>
            </Card.Body>
        </Card>
    )
}
