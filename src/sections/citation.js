import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Citation from "../components/citation"

const CitationSection = () => {
  const results = useStaticQuery(
    graphql`
      query Quotes {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/quotes/" } }) {
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
    `
  )
  const quote =
    results.allMarkdownRemark.edges[
      Math.floor(Math.random() * results.allMarkdownRemark.edges.length)
    ]

  return (
    <div
      id="citation"
      className="bg-parallax bg-citation"
      data-stellar-background-ratio="0.4"
    >
      <div className="section-dark section-content">
        <div className="container text-center">
          <Citation
            author={quote.node.frontmatter.author}
            content={quote.node.rawMarkdownBody.trim()}
            className="citation--huge text-white"
          />
        </div>
      </div>
    </div>
  )
}

export default CitationSection
