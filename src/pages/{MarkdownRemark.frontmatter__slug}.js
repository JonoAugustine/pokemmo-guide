import React from "react"
import { graphql } from "gatsby"
import { Row, Col } from 'react-bootstrap'
import { Page } from '../components/Page'
import { PageTitle } from '../components/PageTitle'
import { SEO } from '../components/SEO'

export default function Template({ data }) {
    console.log(data)
    const { frontmatter, html, tableOfContents } = data.markdownRemark
    return (
        <Page>
            <PageTitle credits={frontmatter.credits}>{frontmatter.title}</PageTitle>
            <Row>
                <Col md={9}>
                    <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </Col>
                <Col md={3}>
                    <div
                        dangerouslySetInnerHTML={{ __html: tableOfContents }}
                    />
                </Col>
            </Row>
        </Page>
    )
}

export function Head({ data }) {
    const { frontmatter } = data.markdownRemark
    return <SEO title={frontmatter.title}></SEO>
}

export const pageQuery = graphql`
        query($id: String!) {
            markdownRemark(id: { eq: $id }) {
                html
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    slug
                    title
                    credits
                    category
                    tags
                }
                tableOfContents
            }
        }
    `