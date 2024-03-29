import React from "react"
import { graphql } from "gatsby"
import ArticlePreview from "../components/ArticlePreview"
import Layout from "../components/Layout"
import Pagination from "../components/Pagination"
import PageSeo from "../components/PageSeo"
import { menuPage } from "../menuItems"

const NewsPage = ({ data, pageContext }) => (
  <Layout activePath="/blog/" menuItems={menuPage}>
    <PageSeo title="News" />
    <div className="page-title">
      <div className="container">
        <h1 className="heading-page">Blog</h1>
      </div>
    </div>
    <div className="section-light section-content section-content--mid section-content--top-small section-content--sm-bottom-small">
      <div className="container">
        <div className="grid">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div
              key={node.frontmatter.path}
              className="grid__item grid__item--lg-span-4 grid__item--break-md-20"
            >
              <ArticlePreview
                author={node.frontmatter.author}
                date={node.frontmatter.date}
                image={node.frontmatter.image.childImageSharp.gatsbyImageData}
                title={node.frontmatter.title}
                url={node.frontmatter.path}
              >
                {node.excerpt}
              </ArticlePreview>
            </div>
          ))}
        </div>
        <Pagination
          current={pageContext.currentPage}
          path="/blog/"
          total={pageContext.numPages}
        />
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query Posts($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts//" } }
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt(pruneLength: 150)
          frontmatter {
            author
            date(formatString: "MMMM DD, YYYY")
            image {
              childImageSharp {
                gatsbyImageData(width: 710, layout: CONSTRAINED)
              }
            }
            path
            title
          }
        }
      }
    }
  }
`

export default NewsPage
