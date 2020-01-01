import React from "react"
import kebabCase from "lodash/kebabCase"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allBlogPost(limit: 2000) {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
  }
`

type Props = {
  data: {
    allBlogPost: {
      group: {
        fieldValue: string
        totalCount: number
      }[]
    }
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}
const TagsPage: React.FC<Props> = ({
  data: {
    allBlogPost: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <div>
    <Helmet title={title} />
    <div>
      <h1>Tags</h1>
      <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default TagsPage
