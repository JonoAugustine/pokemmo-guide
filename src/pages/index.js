import React from "react"
import PostsListing from "../components/PostsListing"
import { Page } from '../components/Page'
import 'bootstrap/dist/css/bootstrap.min.css'
import { SEO } from "../components/SEO"
import { ToolsListing } from "../components/Tools/ToolsListing"
import { pokedex } from '../data/pokedex'

const IndexPage = () => {

    console.log(pokedex)
    return (
        <Page>
            <div className="mb-3">
                <h2 className="mb-3">Guides</h2>
                <PostsListing category="guide" />
            </div>
            <div className="mb-3">
                <h2 className="mb-3">Tools</h2>
                <ToolsListing />
            </div>
        </Page>
    )
}

export const Head = () => <SEO></SEO>

export default IndexPage