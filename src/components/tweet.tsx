import React from "react"
import { HistoryLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
import logo from "../images/tweet.svg"
import BlogPost from "../types/blog-post"

type Props = {
  post: BlogPost
  location: HistoryLocation
}

const Tweet: React.FC<Props> = ({ post, location, ...props }) => {
  const {
    site: {
      siteMetadata: { title, author },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `
  )
  const text = encodeURIComponent(`${post.title} | ${title}`)
  const url = encodeURIComponent(location.href)
  const via = encodeURIComponent(author)
  return (
    <a
      href={`https://twitter.com/intent/tweet?text=${text}&url=${url}&via=${via}`}
      target="_blank"
      rel="noopener noreferrer"
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 28px;
        height: 28px;
        background-color: #1b95e0;
        border-radius: 3px;
        cursor: pointer;
      `}
      {...props}
    >
      <i
        css={css`
          display: block;
          width: 18px;
          height: 18px;
          background-image: url(${logo});
        `}
      />
    </a>
  )
}

export default Tweet
