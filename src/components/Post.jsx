import React from 'react'
import { Card as CardBS } from 'react-bootstrap'
import { Button, Card, Typography } from './Atoms'

export function Post({ title, excerpt, url, credits }) {
    return (
        <Card className="rounded" style={{ border: 0, flex: '1 1 280px' }}>
            <CardBS.Body className="d-flex flex-column align-items-start">
                <CardBS.Title>{title}</CardBS.Title>
                <CardBS.Text>
                    {excerpt}
                </CardBS.Text>
                <div className="mt-auto d-flex align-items-end justify-content-between" style={{ width: '100%' }}>
                    <Button target="_blank" href={url}>Read more</Button>
                    {
                        credits
                            ? <Typography className='text-muted mb-0 text-end'>By: {credits}</Typography>
                            : false
                    }
                </div>
            </CardBS.Body>
        </Card>
    )
}
