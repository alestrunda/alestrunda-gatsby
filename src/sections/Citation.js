import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticQuery, graphql } from "gatsby"
import Citation from "../components/Citation"

const CitationSection = ({ bgImage, quoteEdges }) => {
  const quote = quoteEdges[Math.floor(Math.random() * quoteEdges.length)]

  return (
    <div id="citation" className="bg-wrapper">
      <GatsbyImage image={bgImage} className="bg-img" alt="" />
      <div className="section-dark section-content">
        <div className="container text-center">
          {quote && (
            <Citation
              author={quote.node.frontmatter.author}
              className="citation--huge text-white"
            >
              {quote.node.rawMarkdownBody.trim()}
            </Citation>
          )}
        </div>
      </div>
    </div>
  )
}

CitationSection.defaultProps = {
  quoteEdges: [],
}

const citationWrapper = () => (
  <StaticQuery
    query={graphql`
      {
        bgImage: file(relativePath: { eq: "bg_citation_1920.jpg" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        quotes: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "//quotes//" } }
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
    render={(data) => (
      <CitationSection
        bgImage={data.bgImage.childImageSharp.gatsbyImageData}
        quoteEdges={data.quotes.edges}
      />
    )}
  />
)

export default citationWrapper
