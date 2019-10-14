import React from "react"
import { HistoryLocation } from "@reach/router"
import { Styled } from "theme-ui"
import PostFooter from "gatsby-theme-blog/src/components/post-footer"
import Layout from "gatsby-theme-blog/src/components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "./seo"
import Tweet from "../../components/tweet"
import HatenaB from "../../components/hatena-b"
import BlogPost from "../../types/blog-post"
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { css } = require("theme-ui")

type Props = {
  data: {
    post: BlogPost
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
  location: HistoryLocation
  previous: BlogPost
  next: BlogPost
}

const Post: React.FC<Props> = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => (
  <Layout location={location} title={title}>
    <SEO title={post.title} description={post.excerpt} />
    <main>
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
        `}
      >
        <Tweet post={post} location={location} />
        <HatenaB
          url={location.href}
          css={css`
            margin-left: 8px;
          `}
        />
      </div>
      <Styled.h1>{post.title}</Styled.h1>
      <Styled.p
        css={css({
          fontSize: 1,
          mt: -3,
          mb: 3,
        })}
      >
        {post.date}
      </Styled.p>
      <MDXRenderer>{post.body}</MDXRenderer>
    </main>
    <PostFooter {...{ previous, next }} />
  </Layout>
)

export default Post
