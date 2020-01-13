import React from "react"
import { graphql } from "gatsby"
import ImageLightbox from "../components/ImageLightbox"
import Layout from "../components/Layout"
import PostNavigation from "../components/PostNavigation"
import SEO from "../components/Seo"
import { menuPage } from "../menuItems"

const Work = ({
  data: {
    markdownRemark: { frontmatter, html },
  },
  pageContext,
}) => (
  <Layout menuItems={menuPage} activePath="/work/">
    <SEO title={frontmatter.title} />
    <div className="page-title">
      <div className="container">
        <h1 className="heading-page">{frontmatter.title}</h1>
      </div>
    </div>
    <div className="section-light section-content section-content--mid section-content--top-small section-content--sm-bottom-small">
      <div className="container">
        <PostNavigation prev={pageContext.prev} next={pageContext.next} />
        <div className="grid grid--big">
          <div className="grid__item grid__item--lg-span-7">
            <ImageLightbox
              alt={frontmatter.title}
              imageFluid={frontmatter.image.childImageSharp.fluid}
              imageFull={frontmatter.imageFull.childImageSharp.fluid.src}
            />
          </div>
          <div className="grid__item grid__item--lg-span-5 grid__item--break-md-30">
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <div className="m20"></div>
            <h4 className="text-uppercase">Project details</h4>
            <div className="m5"></div>
            <strong className="text-black">Date:</strong> {frontmatter.date}
            <br />
            <div className="m5"></div>
            {frontmatter.technologies && (
              <>
                <strong className="text-black">Technologies:</strong>{" "}
                {frontmatter.technologies}
                <div className="m5"></div>
              </>
            )}
            {frontmatter.client && (
              <>
                <strong className="text-black">Client:</strong>{" "}
                {frontmatter.client}
                <div className="m5"></div>
              </>
            )}
            {frontmatter.urlGithub && (
              <>
                <strong className="text-black">Github:</strong>{" "}
                <a href={frontmatter.urlGithub}>{frontmatter.urlGithub}</a>
                <div className="m5"></div>
              </>
            )}
            {frontmatter.urlLive && (
              <>
                <strong className="text-black">Website:</strong>{" "}
                <a
                  href={frontmatter.urlLive}
                  rel={frontmatter.urlNoFollow ? "nofollow" : ""}
                >
                  {frontmatter.urlLive}
                </a>
                <div className="m5"></div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        client
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 600, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageFull {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 90) {
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
