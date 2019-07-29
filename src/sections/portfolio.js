import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Filter from "../components/filter"
import Work from "../components/work"

const featuredTechnologies = [
  "E-shop",
  "JavaScript",
  "Gatsby",
  "React",
  "React Native",
  "Themeforest",
  "WordPress",
]

class Portfolio extends React.Component {
  state = {
    activeFilter: "",
  }

  onFilter = filter => {
    this.setState({
      activeFilter: filter,
    })
  }

  render() {
    const edges = this.props.data.allMarkdownRemark.edges

    //have to use Array.from, spread operator not working properly https://stackoverflow.com/questions/56775730/cloning-set-using-spread-operator-results-in-nested-set-in-gatsby
    const technologies = Array.from(
      new Set(
        edges
          .reduce(
            (allTechnologies, edge) =>
              allTechnologies + "," + edge.node.frontmatter.technologies,
            ""
          )
          .split(",")
          .map(tech => tech.trim())
          .filter(tech => !!tech)
      )
    ).sort()

    let activeEdges
    if (this.state.activeFilter) {
      activeEdges = edges.filter(edge =>
        edge.node.frontmatter.technologies
          .split(",")
          .map(tech => tech.trim())
          .includes(this.state.activeFilter)
      )
    } else {
      activeEdges = edges
    }

    return (
      <section id="portfolio">
        <div className="section-light section-content">
          <div className="container text-center">
            <header className="heading-box mb0">
              <div className="decoration-border decoration-border--top decoration-border--tiny"></div>
              <div className="decoration-border decoration-border--bottom decoration-border--tiny"></div>
              <h1 className="heading-box__title">Portfolio</h1>
            </header>
            <h3>Selected Works</h3>
          </div>
          <div className="text-center">
            <Filter
              activeFilter={this.state.activeFilter}
              featuredFilters={featuredTechnologies}
              filters={technologies}
              onFilter={this.onFilter}
            />
            <div className="m60"></div>
          </div>

          <div className="works-grid">
            {activeEdges.map(({ node }) => (
              <Work
                key={node.frontmatter.path}
                content={node.frontmatter.excerpt.trim()}
                image={node.frontmatter.image.childImageSharp.fluid}
                imageFull={node.frontmatter.imageFull.childImageSharp.fluid}
                path={node.frontmatter.path}
                title={node.frontmatter.title}
                urlGithub={node.frontmatter.urlGithub}
                urlList={node.frontmatter.urlList}
                urlLive={node.frontmatter.urlLive}
                urlNoFollow={node.frontmatter.urlNoFollow}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      query Works {
        allMarkdownRemark(
          filter: {
            fileAbsolutePath: { regex: "/works/" }
            frontmatter: { published: { eq: "true" } }
          }
          sort: { order: DESC, fields: [frontmatter___date] }
        ) {
          edges {
            node {
              frontmatter {
                excerpt
                image {
                  childImageSharp {
                    fluid(maxWidth: 552) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                imageFull {
                  childImageSharp {
                    fluid(maxWidth: 1920) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                path
                technologies
                title
                urlGithub
                urlList
                urlLive
                urlNoFollow
              }
            }
          }
        }
      }
    `}
    render={data => <Portfolio data={data} {...props} />}
  />
)
