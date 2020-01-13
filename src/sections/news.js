import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import ArticlePreview from "../components/ArticlePreview"
import InViewAnim from "../components/InViewAnim"

const News = () => {
  const animDelayStep = 150

  return (
    <StaticQuery
      query={graphql`
        query PostsFeatured {
          allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/posts/" } }
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 3
          ) {
            edges {
              node {
                excerpt(pruneLength: 150)
                frontmatter {
                  author
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
          }
        }
      `}
      render={data => (
        <section id="news">
          <div className="section-light section-content">
            <div className="container">
              <div className="text-center">
                <header className="heading-box">
                  <div className="decoration-border decoration-border--top decoration-border--tiny"></div>
                  <div className="decoration-border decoration-border--bottom decoration-border--tiny"></div>
                  <h1 className="heading-box__title">Latest News</h1>
                </header>
              </div>
              <div className="grid grid--center">
                {data.allMarkdownRemark.edges.map(({ node }, index) => (
                  <InViewAnim
                    key={node.frontmatter.path}
                    className="grid__item grid__item--lg-span-4 grid__item--break-md-20"
                    delay={(index + 1) * animDelayStep}
                  >
                    {() => (
                      <ArticlePreview
                        author={node.frontmatter.author}
                        date={node.frontmatter.date}
                        excerpt={node.excerpt}
                        image={node.frontmatter.image.childImageSharp.fluid}
                        title={node.frontmatter.title}
                        url={node.frontmatter.path}
                      />
                    )}
                  </InViewAnim>
                ))}
              </div>
              <div className="text-center mt10">
                <Link className="link-box" to="/blog/">
                  All news
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    />
  )
}

export default News
