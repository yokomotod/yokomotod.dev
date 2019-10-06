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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `yokomotod.dev`,
        short_name: `yokomotod.dev`,
        start_url: `/`,
        background_color: `#007acc`,
        theme_color: `#007acc`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
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
