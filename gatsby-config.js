const {
    NODE_ENV,
    URL: NETLIFY_SITE_URL = 'https://www.example.com',
    DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
    CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
    siteMetadata: {
        title: `PokeMMO Guide`,
        siteUrl,
        description: `A website for everything about PokeMMO`
    },
    plugins: [
        `gatsby-plugin-advanced-sitemap`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `PokeMMO Guide`,
                short_name: `PokeMMO Guide`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#343a40`,
                display: `standalone`,
                icon: 'src/images/logo.png',
                theme_color_in_head: false
            },
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                resolveEnv: () => NETLIFY_ENV,
                env: {
                    production: {
                        policy: [{ userAgent: '*' }],
                    },
                    'branch-deploy': {
                        policy: [{ userAgent: '*', disallow: ['/'] }],
                        sitemap: null,
                        host: null,
                    },
                    'deploy-preview': {
                        policy: [{ userAgent: '*', disallow: ['/'] }],
                        sitemap: null,
                        host: null,
                    },
                },
            },
        },
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