import React from "react"
import { HistoryLocation } from "@reach/router"

import Posts from "../../gatsby-theme-blog/components/posts"

type Props = {
  location: HistoryLocation
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    allBlogPost: {
      edges: {
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
    }
    tagsGroup: {
      group: {
        fieldValue: string
        totalCount: number
      }[]
    }
  }
}

const PostsTemplate: React.FC<Props> = ({ location, data }) => {
  const { site, allBlogPost, tagsGroup } = data

  console.log(data)
  return (
    <Posts
      location={location}
      siteTitle={site.siteMetadata.title}
      posts={allBlogPost.edges}
      tags={tagsGroup.group.map(({ fieldValue, totalCount }) => ({
        tag: fieldValue,
        count: totalCount,
      }))}
    />
  )
}

export default PostsTemplate
