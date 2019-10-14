declare module "*.svg"

declare module "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors" {
  const colors: {
    text: string
    background: string
    primary: string
    secondary: string
    muted: string
    highlight: string
    heading: string
    prism: {
      background: string
      comment: string
      string: string
      var: string
      number: string
      constant: string
      punctuation: string
      className: string
      tag: string
      boolean: string
      property: string
      namespace: string
      highlight: string
    }
    modes: {
      dark: {
        text: string
        background: string
        primary: string
        secondary: string
        muted: string
        highlight: string
        heading: string
      }
    }
  }
  export default colors
}

declare module "gatsby-theme-blog/src/components/layout" {
  import { HistoryLocation } from "@reach/router"
  type Props = {
    title: string
    location: HistoryLocation
  }
  const Layout: React.FC<Props>
  export default Layout
}

declare module "gatsby-theme-blog/src/components/post-footer" {
  // Import or export declaration in an ambient module declaration cannot
  // reference module through relative module name.ts(2439)
  //
  // import BlogPost from "./types/blog-post"
  type BlogPost = {
    id: string
    title: string
    body: string
    slug: string
    date: Date
    tags: string[]
    keywords: string[]
    excerpt: string
  }
  type Props = {
    previous: BlogPost
    next: BlogPost
  }
  const PostFooter: React.FC<Props>
  export default PostFooter
}
