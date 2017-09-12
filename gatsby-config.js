module.exports = {
  siteMetadata: {
    title: 'Gatsby Portfolio 2017',
  },
  plugins: ['gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    'gatsby-plugin-glamor',
  ],
}
