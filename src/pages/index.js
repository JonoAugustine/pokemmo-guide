import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react"
import { Typography } from "../components/Atoms"
import { Page } from '../components/Page'
import PostsListing from "../components/PostsListing"
import { QuickInfoListing } from "../components/QuickInfo/QuickInfoListing"
import { Seo } from "../components/SEO"
import { ToolsListing } from "../components/Tools/ToolsListing"

const IndexPage = () => {

    return (
        <Page>
            <div className="mb-3">
                <Typography as="h2" className="mb-3">Tools</Typography>
                <ToolsListing />
            </div>
            <div className="mb-3">
                <Typography as="h2" className="mb-3">Quick Info</Typography>
                <QuickInfoListing />
            </div>
            <div className="mb-3">
                <Typography as="h2">Guides</Typography>
                <PostsListing />
            </div>
        </Page>
    )
}

const description = "A website for every tools, guides and informations about PokeMMO. Read the best way to make money and how to make competitive pokemon easy. "
export const Head = () => <Seo title="Homepage" description={description}></Seo>

export default IndexPage