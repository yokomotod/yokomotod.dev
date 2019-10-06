import React, { Fragment } from "react"
import { Styled } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

/**
 * Change the content to add your own bio
 */

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            social {
              url
            }
          }
        }
      }
    `
  )

  return (
    <Fragment>
      <Styled.a href={data.site.siteMetadata.social[0].url}>@{data.site.siteMetadata.author}</Styled.a>
    </Fragment>
  )
}
