import React from "react"
import { useSiteMetadata } from "../hooks/useSiteMetadata"

export const Seo = ({ title, description, pathname, children }) => {
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
            <meta name="google-site-verification" content="fpBZiBPol9ot44AVTO6VTrbM9sHeiMayGkxBKjh6xUg" />
            {children}
        </>
    )
}