module.exports = {
  siteMetadata: {
    title: 'Gatsby App',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    // Add tout ce qui est dessous après avoir installer: gatsby-plugin-catch-links,gatsby-source-filesystem,gatsby-transformer-remark
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-transformer-remark',
  ],
}
