import React from "react"
import { HistoryLocation } from "@reach/router"
import { graphql, Link } from "gatsby"
import { Styled } from "theme-ui"
import Layout from "gatsby-theme-blog/src/components/layout"

export const query = graphql`
  query {
    site: site {
      siteMetadata {
        title
      }
    }
  }
`

type Props = {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
  location: HistoryLocation
}

const FourOhFour: React.FC<Props> = ({
  data: {
    site: {
      siteMetadata: { title },
    },
  },
  location,
}) => (
  <Layout location={location} title={title}>
    <main>
      <Styled.h1>Page not found</Styled.h1>
      <Styled.p>
        Oops! The page you are looking for has been removed or relocated.
      </Styled.p>
      {/*
        // @ts-ignore  */}
      <Styled.a as={Link} to="/">
        <p>Go Back</p>
      </Styled.a>
    </main>
  </Layout>
)

export default FourOhFour
