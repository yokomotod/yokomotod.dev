import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

const darkBlue = `#007acc`
const lightBlue = `#66E0FF`
const blueGray = `#282c35`

// https://stackoverflow.com/a/47914631/8236724
type NestedPartial<T> = {
  [K in keyof T]?: T[K] extends (infer R)[]
    ? NestedPartial<R>[]
    : NestedPartial<T[K]>
}

export default merge<NestedPartial<typeof defaultThemeColors>>(
  defaultThemeColors,
  {
    text: blueGray,
    primary: darkBlue,
    heading: blueGray,
    modes: {
      dark: {
        background: blueGray,
        primary: lightBlue,
        highlight: lightBlue,
      },
    },
  }
)
