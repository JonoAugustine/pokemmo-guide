import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
export const SEO = ({ title, description, pathname, children }) => {
    const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata()
    const seo = {
        title: `${defaultTitle} ${title ? `- ${title}` : ''}`,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname || ``}`
    }
    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            {children}
        </>
    )
}