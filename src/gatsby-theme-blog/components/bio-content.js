import React, { Fragment } from "react"
import { Styled } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

// keep .js due to https://github.com/gatsbyjs/gatsby/issues/18554

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
