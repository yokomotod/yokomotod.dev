import { css } from "@styled-system/css"
import React from "react"
import { Styled } from "theme-ui"

const Footer: React.FC = () => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
    })}
  >
    © {new Date().getFullYear()}, Powered by
    {` `}
    <Styled.a
      href="https://www.gatsbyjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Gatsby
    </Styled.a>
  </footer>
)

export default Footer
