module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
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
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allBlogPost } }) => {
              return allBlogPost.edges.map(edge => {
                return {
                  title: edge.node.title,
                  description: edge.node.excerpt,
                  date: edge.node.date,
                  url: site.siteMetadata.siteUrl + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.slug,
                  // custom_elements: [{ "content:encoded": edge.node.html }],
                }
              })
            },
            query: `
              {
                allBlogPost(
                  sort: { order: DESC, fields: [date, title] },
                ) {
                  edges {
                    node {
                      id
                      excerpt
                      slug
                      title
                      date(formatString: "MMMM DD, YYYY")
                    }
                  }
                }
              }
            `,
            output: `/rss.xml`,
            title: `yokomotod.dev RSS Feed`,
          },
        ],
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `yokomotod.dev`,
    author: `yokomotod`,
    description: `yokomotod's tech blog`,
    siteUrl: `https://yokomotod.dev`,
    image: `/icons/icon-512x512.png`,
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
