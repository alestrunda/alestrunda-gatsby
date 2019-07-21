import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Work = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="container">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        {frontmatter.technologies && (
          <p>Technologies: {frontmatter.technologies}</p>
        )}
        {frontmatter.client && <p>Client: {frontmatter.client}</p>}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        client
        date(formatString: "MMMM DD, YYYY")
        path
        technologies
        title
      }
    }
  }
`

export default Work
