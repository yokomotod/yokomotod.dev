import React, { Fragment } from "react"
import { Styled } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

type Data = {
  site: {
    siteMetadata: {
      author: string
      social: {
        url: string
        name: string
      }[]
    }
  }
}
const BioContent: React.FC = () => {
  const data = useStaticQuery<Data>(
    graphql`
      query {
        site {
          siteMetadata {
            author
            social {
              name
              url
            }
          }
        }
      }
    `
  )

  return (
    <Fragment>
      <div>@{data.site.siteMetadata.author}</div>
      <div>
        {data.site.siteMetadata.social.map((platform, i, arr) => (
          <Fragment key={platform.url}>
            <Styled.a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {platform.name}
            </Styled.a>
            {arr.length - 1 !== i && (
              <Fragment>
                {` `}&bull;{` `}
              </Fragment>
            )}
          </Fragment>
        ))}
      </div>
    </Fragment>
  )
}

export default BioContent
