import React from "react"
import { useColorMode } from "theme-ui"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { css } = require("theme-ui")

const Footer: React.FC = () => {
  const [colorMode] = useColorMode()

  return (
    <footer
      css={css({
        mt: 4,
        pt: 3,
      })}
    >
      © {new Date().getFullYear()}, Powered by
      {` `}
      <a
        css={{
          color:
            colorMode === "dark"
              ? defaultThemeColors.modes.dark.text
              : defaultThemeColors.text,
        }}
        href="https://www.gatsbyjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Gatsby
      </a>
    </footer>
  )
}
export default Footer