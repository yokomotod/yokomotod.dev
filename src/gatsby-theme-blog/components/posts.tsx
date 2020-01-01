import React, { Fragment } from "react"
import { HistoryLocation } from "@reach/router"
import { Link } from "gatsby"
import { Styled } from "theme-ui"
import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "./seo"
import Footer from "./home-footer"
import { css } from "@styled-system/css"

type Props = {
  location: HistoryLocation
  siteTitle: string
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
  tags: {
    tag: string
    count: number
  }[]
}

const Posts: React.FC<Props> = ({ location, siteTitle, posts, tags }) => (
  <Layout location={location} title={siteTitle}>
    <main>
      <p>
        {tags &&
          tags.map(({ tag, count }) => (
            <>
              {tag}({count})
            </>
          ))}
      </p>
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
              <div
                css={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <small>{node.date}</small>
                {node.tags.map(tag => (
                  <Styled.a
                    as={Link}
                    /*
                    // @ts-ignore  */
                    to={`tags/${tag}`}
                  >
                    <small>{tag}</small>
                  </Styled.a>
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
