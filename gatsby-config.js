module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-N9Z994W",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-51089249-5",
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `yokomotod.dev`,
    author: `yokomotod`,
    description: `yokomotod's tech blog`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/yokomotod`,
      },
      {
        name: `github`,
        url: `https://github.com/yokomotod`,
      },
    ],
  },
}
