import React, { Fragment } from "react"
import { HistoryLocation } from "@reach/router"
import { Styled } from "theme-ui"
import { Link, graphql } from "gatsby"
import Layout from "gatsby-theme-blog/src/components/layout"
import { css } from "@styled-system/css"

export const pageQuery = graphql`
  query($tag: String) {
    allBlogPost(
      limit: 2000
      sort: { fields: [date], order: DESC }
      filter: { tags: { in: [$tag] } }
    ) {
      totalCount
      edges {
        node {
          slug
          title
          date(formatString: "MMMM DD, YYYY")
          excerpt
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

type Props = {
  pageContext: { tag: string }
  data: {
    allBlogPost: {
      totalCount: number
      edges: {
        node: {
          slug: string
          title: string
          date: Date
          excerpt: string
        }
      }[]
    }
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
  location: HistoryLocation
}

const Tags: React.FC<Props> = ({
  pageContext: { tag },
  data: {
    allBlogPost: { edges, totalCount },
    site: {
      siteMetadata: { title },
    },
  },
  location,
}) => {
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout location={location} title={title}>
      <main>
        <Styled.h1>{tagHeader}</Styled.h1>
        {edges.map(({ node }) => {
          const title = node.title || node.slug
          // const keywords = node.keywords || []
          return (
            <Fragment key={node.slug}>
              {/* <SEO title="Home" keywords={keywords} /> */}
              <div>
                <Styled.h2
                  css={css({
                    mb: 1,
                  })}
                >
                  <Styled.a
                    as={Link}
                    css={{
                      textDecoration: `none`,
                    }}
                    /*
                    // @ts-ignore  */
                    to={node.slug}
                  >
                    {title}
                  </Styled.a>
                </Styled.h2>
                <small>{node.date}</small>
                <Styled.p>{node.excerpt}</Styled.p>
              </div>
            </Fragment>
          )
        })}
      </main>
    </Layout>
  )
}

export default Tags
