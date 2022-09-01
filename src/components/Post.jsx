import React from 'react'
import { Card as CardBS } from 'react-bootstrap'
import { Button, Card } from './Atoms'

export function Post({ title, excerpt, url }) {
    return (
        <Card>
            <CardBS.Body>
                <CardBS.Title>{title}</CardBS.Title>
                <CardBS.Text>
                    {excerpt}
                </CardBS.Text>
                <Button target="_blank" href={url}>Read more</Button>
            </CardBS.Body>
        </Card>
    )
}
