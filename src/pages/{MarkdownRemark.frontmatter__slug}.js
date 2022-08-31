import { graphql } from "gatsby"
import React from "react"
import { Col, Row } from 'react-bootstrap'
import { Page } from '../components/Page'
import { PageTitle } from '../components/PageTitle'
import { Seo } from '../components/SEO'

import { Typography } from "../components/Atoms"
import * as tocStyle from './guide.module.css'

export default function Template({ data }) {
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
                <Col md={3} className={tocStyle.toc}>
                    <Typography as="h3">Quick links</Typography>
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
    return <Seo title={frontmatter.title}></Seo>
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