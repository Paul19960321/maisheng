module.exports = {
  siteMetadata: {
    title: `一线签电子合同_电子签章`,
    description: `一线签电子合同_电子签章|电子合同|智能审批|印章管理|区块链存证`,
    author: `@Paul`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-less`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `一线签电子合同`,
        short_name: `一线签`,
        start_url: `/`,
        background_color: `#5a8dfd`,
        theme_color: `#5a8dfd`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
