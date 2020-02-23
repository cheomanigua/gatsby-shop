module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.estrella5puntas.com',
    title: "Your Shop or TSA name",
    description: "An awesome description of your site so it fits well in Google Search engine",
    author: "Sergio Sanchez",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The estrella5puntas below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: [`/category/*`, `/path/to/page`],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            }
          })
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.estrella5puntas.com',
        sitemap: 'https://www.estrella5puntas.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
  ],
}
