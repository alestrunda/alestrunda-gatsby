import React, { useEffect, useRef, useState } from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import { PROFESSIONAL_CAREER_START_YEAR } from "../constants"
import CounterInfo from "../components/CounterInfo"
import InViewAnim from "../components/InViewAnim"

const getYearsOfExperience = () =>
  new Date().getFullYear() - PROFESSIONAL_CAREER_START_YEAR

const Stats = ({ bgImage }) => {
  const [githubStats, setGithubStats] = useState({})
  const isUnmounted = useRef()

  useEffect(() => {
    fetch("https://iq22l0wv25.execute-api.us-east-1.amazonaws.com/stats")
      .then((response) => response.json())
      .then((response) => {
        if (isUnmounted.current) return
        setGithubStats(response)
      })
      .catch((e) => {
        console.error(e)
      })
    return () => {
      isUnmounted.current = true
    }
  })

  return (
    <section id="stats" className="bg-wrapper">
      <Img fluid={bgImage} className="bg-img" alt="" />
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
                  text="hours per week studying"
                  value={8}
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
      query {
        bgImage: file(relativePath: { eq: "bg_stats_1920.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => <Stats bgImage={data.bgImage.childImageSharp.fluid} />}
  />
)

export default statsWrapper
