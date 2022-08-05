import React from 'react'
import { Col } from 'react-bootstrap'

export function TableSummary({ items }) {
    if (!items) return;

    return (
        <Col md="3" style={{ borderLeft: '1px solid #eee' }}>
            <h3 className="fs-4">Table of Contents</h3>
            <ul>
                {
                    Object.keys(items).map((key) => (
                        <li key={key}>
                            <a className="text-capitalize" href={`#${key}`}>{items[key]}</a>
                        </li>
                    ))
                }

            </ul>
        </Col>
    )
}