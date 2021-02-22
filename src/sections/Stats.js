import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import { PROFESSIONAL_CAREER_START_YEAR } from "../constants"
import CounterInfo from "../components/CounterInfo"
import InViewAnim from "../components/InViewAnim"

const getYearsOfExperience = () =>
  new Date().getFullYear() - PROFESSIONAL_CAREER_START_YEAR

const Stats = ({ bgImage }) => (
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
                iconClassName="fa fa-smile"
                text="satisfied clients"
                value={64}
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
                text="years of experience"
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
                text="hours per week self-studying"
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

export default () => (
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
