import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { menuPage } from "../menuItems"

const Work = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout menuItems={menuPage} activePath="/work/">
      <SEO title={frontmatter.title} />
      <div className="page-title">
        <div className="container">
          <h1 className="heading-page">{frontmatter.title}</h1>
        </div>
      </div>
      <div className="section-light section-content section-content--mid section-content--top-small section-content--sm-bottom-small">
        <div className="container">
          <div className="grid grid--big">
            <div className="grid__item grid__item--lg-span-7">
              <Img
                alt={frontmatter.title}
                className="img-responsive"
                fluid={frontmatter.image.childImageSharp.fluid}
              />
            </div>
            <div className="grid__item grid__item--lg-span-5 grid__item--break-md-30">
              <div dangerouslySetInnerHTML={{ __html: html }} />
              <div class="m20"></div>
              <h4 class="text-uppercase">Project details</h4>
              <div class="m5"></div>
              <strong class="text-black">Date:</strong> {frontmatter.date}
              <br />
              <div class="m5"></div>
              {frontmatter.technologies && (
                <>
                  <strong class="text-black">Technologies:</strong>{" "}
                  {frontmatter.technologies}
                  <div class="m5"></div>
                </>
              )}
              {frontmatter.client && (
                <>
                  <strong class="text-black">Client:</strong>{" "}
                  {frontmatter.client}
                  <div class="m5"></div>
                </>
              )}
              {frontmatter.urlGithub && (
                <>
                  <strong class="text-black">Github:</strong>{" "}
                  <a href={frontmatter.urlGithub}>{frontmatter.urlGithub}</a>
                  <div class="m5"></div>
                </>
              )}
              {frontmatter.urlLive && (
                <>
                  <strong class="text-black">Website:</strong>{" "}
                  <a
                    href={frontmatter.urlLive}
                    rel={frontmatter.urlNoFollow ? "nofollow" : ""}
                  >
                    {frontmatter.urlLive}
                  </a>
                  <div class="m5"></div>
                </>
              )}
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
        client
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        path
        technologies
        title
        urlGithub
        urlLive
        urlNoFollow
      }
    }
  }
`

export default Work
