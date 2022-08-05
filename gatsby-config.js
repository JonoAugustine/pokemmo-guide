module.exports = {
    siteMetadata: {
        title: `PokeMMO Guide`,
        siteUrl: `https://pokemmoguide.netlify.app`,
        description: `A website for everything about PokeMMO`
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                "trackingId": "325984560"
            }
        }, "gatsby-plugin-image", "gatsby-plugin-sitemap", {
            resolve: 'gatsby-plugin-manifest',
            options: {
                "icon": "src/images/logo.png"
            }
        }, "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        }, {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdown-pages`,
                path: `${__dirname}/src/markdown-pages`,
            },
        },
        `gatsby-transformer-remark`,
    ]
};