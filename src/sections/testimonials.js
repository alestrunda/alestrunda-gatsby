import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import Citation from "../components/citation"

const Testimonials = () => {
  const results = useStaticQuery(
    graphql`
      query Testimonials {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/testimonials/" } }
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              rawMarkdownBody
              frontmatter {
                author
                authorDetail
                path
              }
            }
          }
        }
      }
    `
  )

  return (
    <section id="testimonials">
      <div className="section-light section-content">
        <div className="container">
          <div className="text-center">
            <header className="heading-box">
              <div className="decoration-border decoration-border--top decoration-border--tiny"></div>
              <div className="decoration-border decoration-border--bottom decoration-border--tiny"></div>
              <h1 className="heading-box__title">Testimonials</h1>
            </header>
          </div>
          <div className="container-limit text-center">
            <Slider
              arrows={false}
              dots={true}
              infinite={true}
              speed={800}
              slidesToShow={1}
              slidesToScroll={1}
            >
              {results.allMarkdownRemark.edges.map(({ node }) => (
                <div className="mb50" key={node.frontmatter.path}>
                  <Citation
                    author={node.frontmatter.author}
                    authorDetail={node.frontmatter.authorDetail}
                    content={node.rawMarkdownBody.trim()}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
