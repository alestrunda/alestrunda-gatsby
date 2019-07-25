import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { menuPage } from "../menuItems"

const Post = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout menuItems={menuPage} activePath="/blog/">
      <SEO title={frontmatter.title} />
      <div className="page-title">
        <div className="container">
          <h1 className="heading-page">{frontmatter.title}</h1>
        </div>
      </div>
      <div className="section-light section-content section-content--mid section-content--top-small section-content--sm-bottom-small">
        <div className="container">
          <div className="grid grid--big post-full">
            <div className="grid__item grid__item--lg-span-6">
              <Img
                alt={frontmatter.title}
                className="img-responsive post-full__img"
                fluid={frontmatter.image.childImageSharp.fluid}
              />
            </div>
            <div className="grid__item grid__item--lg-span-6">
              <div className="post-full__content">
                <header>
                  <span className="text-silver">{frontmatter.date}</span>
                  <h2 className="post-full__title">{frontmatter.title}</h2>
                </header>
                <div dangerouslySetInnerHTML={{ __html: html }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 710) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        path
        title
      }
    }
  }
`

export default Post
