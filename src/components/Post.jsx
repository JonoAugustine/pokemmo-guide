import { Link } from 'gatsby'
import React from 'react'
import { Card as CardBS } from 'react-bootstrap'
import { Button, Card } from './Atoms'

export function Post({ frontmatter }) {
    return (
        <Card>
            <CardBS.Img variant="top" />
            <CardBS.Body>
                <CardBS.Title>{frontmatter.title}</CardBS.Title>
                <CardBS.Text>
                    {frontmatter.excerpt}
                </CardBS.Text>
                <Button as={Link} to={frontmatter.slug}>Read more</Button>
            </CardBS.Body>
        </Card>
    )
}
