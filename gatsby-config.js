/* eslint-disable quotes */

module.exports = {
  siteMetadata: {
    title: 'Gatsby Blog',
    description: 'Simple app using styled components and Gatsby',
    siteUrl: 'https://masiuciszek.com',
    image: `https://images.unsplash.com/photo-1525183995014-bd94c0750cd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80`,
    author: {
      name: 'Marcell Ciszek',
      minibio: `
          I am a junior dev from Gothenburg Sweden,
          <strong>Lambda</strong> Contact me if you want to talk or chat.
        `,
    },
    social: {
      twitter: '@masiuciszek',
      fbAppID: '',
    },
  },
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        // Add any options here
      },
    },

    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
