import React from "react"
import PostsListing from "../components/PostsListing"
import { Page } from '../components/Page'
import 'bootstrap/dist/css/bootstrap.min.css'
import { SEO } from "../components/SEO"

const IndexPage = () => {
    return (
        <Page>
            <PostsListing category="guide" />
        </Page>
    )
}

export const Head = () => <SEO></SEO>

export default IndexPage