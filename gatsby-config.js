module.exports = {
    siteMetadata: {
        title: `PokeMMO Guide`,
        siteUrl: `https://pokemmoguide.netlify.app`,
        description: `A website for everything about PokeMMO`
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-google-gtag',
            options: {
                trackingIds: [
                    "G-KW8TM1VBRZ"
                ],
                gtagConfig: {
                    anonymize_ip: true,
                    cookie_expires: 0,
                },
            }
        },
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap",
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                "icon": "src/images/logo.png"
            }
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "assets",
                "path": "./src/assets/"
            },
            __key: "assets"
        },
        {
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
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                tableOfContents: {
                    heading: null,
                    maxDepth: 3
                },
                plugins: [
                    {
                        resolve: "gatsby-remark-external-links",
                        options: {
                            target: "_blank",
                            rel: "nofollow norel"
                        }
                    }
                ]
            }
        }
    ]
};