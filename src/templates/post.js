import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import PageSeo from "../components/PageSeo"
import PostNavigation from "../components/PostNavigation"
import { menuPage } from "../menuItems"

const Post = ({
  data: {
    markdownRemark: { frontmatter, html },
  },
  pageContext,
}) => (
  <Layout menuItems={menuPage} activePath="/blog/">
    <PageSeo title={frontmatter.title} />
    <div className="page-title">
      <div className="container">
        <h1 className="heading-page">{frontmatter.title}</h1>
      </div>
    </div>
    <div className="section-light section-content section-content--mid section-content--top-small section-content--sm-bottom-small">
      <div className="container">
        <PostNavigation prev={pageContext.prev} next={pageContext.next} />
        <div className="grid grid--big post-full">
          <div className="grid__item grid__item--lg-span-6">
            <GatsbyImage
              image={frontmatter.image.childImageSharp.gatsbyImageData}
              alt={frontmatter.title}
              className="img-responsive post-full__img"
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

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        image {
          childImageSharp {
            gatsbyImageData(width: 710, quality: 80, layout: CONSTRAINED)
          }
        }
        path
        title
      }
    }
  }
`

export default Post
