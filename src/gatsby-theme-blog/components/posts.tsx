import React, { Fragment } from "react"
import { HistoryLocation } from "@reach/router"
import { Link } from "gatsby"
import { Styled } from "theme-ui"
import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "./seo"
import Footer from "./home-footer"
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { css } = require("theme-ui")

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
  }
`

type Props = {
  location: HistoryLocation
  posts: {
    node: {
      id: string
      excerpt: string
      slug: string
      title: string
      date: string
      tags: string[]
      keywords: undefined
    }
  }[]
  siteTitle: string
}

const Posts: React.FC<Props> = ({ location, posts, siteTitle }) => (
  <Layout location={location} title={siteTitle}>
    <main>
      {posts.map(({ node }) => {
        const title = node.title || node.slug
        const keywords = node.keywords || []
        return (
          <Fragment key={node.slug}>
            <SEO title="Home" keywords={keywords} />
            <div>
              <Styled.h2
                css={css({
                  mb: 1,
                })}
              >
                {/*
                  // @ts-ignore  */}
                <Styled.a
                  as={Link}
                  css={{
                    textDecoration: `none`,
                  }}
                  to={node.slug}
                >
                  {title}
                </Styled.a>
              </Styled.h2>
              <div
                css={{
                  display: "flex",
                }}
              >
                <small>{node.date}</small>
                {node.tags.map(tag => (
                  <small>{tag}</small>
                ))}
              </div>
              <Styled.p>{node.excerpt}</Styled.p>
            </div>
          </Fragment>
        )
      })}
    </main>
    <Footer />
  </Layout>
)

export default Posts
