import React from "react"
import { graphql } from "gatsby"
import { Page } from '../components/Page'
import { PageTitle } from '../components/PageTitle'
import { SEO } from '../components/SEO'

export default function Template({ data }) {
    const { frontmatter, html } = data.markdownRemark
    return (
        <Page>
            <PageTitle credits={frontmatter.credits}>{frontmatter.title}</PageTitle>
            <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
            />
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
            }
        }
    `