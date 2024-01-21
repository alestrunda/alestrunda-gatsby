import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticQuery, graphql } from "gatsby"
import { getYearsOfExperience } from "../helpers"
import CounterInfo from "../components/CounterInfo"
import InViewAnim from "../components/InViewAnim"
import useGithubStats from "../hooks/useGithubStats"

const Stats = ({ bgImage }) => {
  const { stats: githubStats } = useGithubStats()

  return (
    <section id="stats" className="bg-wrapper">
      <GatsbyImage image={bgImage} className="bg-img" alt="" />
      <div className="section-dark section-content">
        <div className="container text-center">
          <header className="heading-box">
            <div className="decoration-border decoration-border--top decoration-border--tiny"></div>
            <div className="decoration-border decoration-border--bottom decoration-border--tiny"></div>
            <h1 className="heading-box__title">Some interesting facts</h1>
          </header>
          <div className="grid grid--clean box-info-grid">
            <InViewAnim
              className="grid__item grid__item--xl-span-3 grid__item--lg-span-6"
              delay="100"
            >
              {(isAnimated) => (
                <CounterInfo
                  iconClassName="fab fa-github"
                  text="my recent github commits"
                  value={githubStats.commits_cnt || 0}
                  started={isAnimated}
                  duration={6}
                />
              )}
            </InViewAnim>
            <InViewAnim
              className="grid__item grid__item--xl-span-3 grid__item--lg-span-6 grid__item--break-md-50"
              delay="200"
            >
              {(isAnimated) => (
                <CounterInfo
                  iconClassName="fa fa-thumbs-down"
                  text="sloppy projects"
                  value={0}
                  started={isAnimated}
                />
              )}
            </InViewAnim>
            <InViewAnim
              className="grid__item grid__item--xl-span-3 grid__item--lg-span-6 grid__item--break-lg-50"
              delay="300"
            >
              {(isAnimated) => (
                <CounterInfo
                  iconClassName="fa fa-chart-line"
                  text="years of professional experience"
                  value={getYearsOfExperience()}
                  started={isAnimated}
                  suffix="+"
                />
              )}
            </InViewAnim>
            <InViewAnim
              className="grid__item grid__item--xl-span-3 grid__item--lg-span-6 grid__item--break-lg-50"
              delay="400"
            >
              {(isAnimated) => (
                <CounterInfo
                  iconClassName="fa fa-graduation-cap"
                  text="finished software courses"
                  value={17}
                  started={isAnimated}
                />
              )}
            </InViewAnim>
          </div>
        </div>
      </div>
    </section>
  )
}

const statsWrapper = () => (
  <StaticQuery
    query={graphql`
      {
        bgImage: file(relativePath: { eq: "bg_stats_1920.jpg" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    `}
    render={(data) => (
      <Stats bgImage={data.bgImage.childImageSharp.gatsbyImageData} />
    )}
  />
)

export default statsWrapper
