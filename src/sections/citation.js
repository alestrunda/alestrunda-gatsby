import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import Citation from "../components/citation"

const CitationSection = ({ bgImage, quoteEdges }) => {
  const quote = quoteEdges[Math.floor(Math.random() * quoteEdges.length)]

  return (
    <div id="citation" className="bg-wrapper">
      <Img fluid={bgImage} className="bg-img" alt="" />
      <div className="section-dark section-content">
        <div className="container text-center">
          {quote && (
            <Citation
              author={quote.node.frontmatter.author}
              content={quote.node.rawMarkdownBody.trim()}
              className="citation--huge text-white"
            />
          )}
        </div>
      </div>
    </div>
  )
}

CitationSection.defaultProps = {
  quoteEdges: [],
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        bgImage: file(relativePath: { eq: "bg_citation_1920.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        quotes: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/quotes/" } }
        ) {
          edges {
            node {
              rawMarkdownBody
              frontmatter {
                author
              }
            }
          }
        }
      }
    `}
    render={data => (
      <CitationSection
        bgImage={data.bgImage.childImageSharp.fluid}
        quoteEdges={data.quotes.edges}
      />
    )}
  />
)
