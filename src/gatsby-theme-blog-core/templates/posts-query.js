import { graphql } from "gatsby"
import PostsPage from "gatsby-theme-blog-core/src/components/posts"

export default PostsPage

export const query = graphql`
  query MyPostsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 1000) {
      edges {
        node {
          id
          excerpt
          slug
          title
          date(formatString: "MMMM DD, YYYY")
          tags
        }
      }
    }
    tagsGroup: allBlogPost(limit: 2000) {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
  }
`
