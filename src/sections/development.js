import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import InViewAnim from "../components/inViewAnim"

const Development = ({ bgImage }) => (
  <section id="development" className="bg-wrapper">
    <Img fluid={bgImage} className="bg-img" alt="" />
    <div className="section-dark section-content">
      <div className="container text-center">
        <header className="heading-box">
          <div className="decoration-border decoration-border--top decoration-border--tiny"></div>
          <div className="decoration-border decoration-border--bottom decoration-border--tiny"></div>
          <h1 className="heading-box__title">Development</h1>
        </header>
        <div className="grid">
          <div className="grid__item grid__item--lg-span-3 grid__item--xs-span-6">
            <InViewAnim className="box-icon" delay="100">
              {() => (
                <>
                  <div className="box-icon__box box-icon__box--gray box-icon__box--small box-icon__box--gray">
                    <i className="box-icon__icon fa fa-cubes"></i>
                  </div>
                  <h4>Thought out concept</h4>
                </>
              )}
            </InViewAnim>
          </div>
          <div className="grid__item grid__item--lg-span-3 grid__item--xs-span-6">
            <InViewAnim className="box-icon" delay="200">
              {() => (
                <>
                  <div className="box-icon__box box-icon__box--small box-icon__box--gray">
                    <i className="box-icon__icon fa fa-check"></i>
                  </div>
                  <h4>High quality development</h4>
                </>
              )}
            </InViewAnim>
          </div>
          <div className="grid__item grid__item--lg-span-3 grid__item--xs-span-6">
            <InViewAnim className="box-icon" delay="300">
              {() => (
                <>
                  <div className="box-icon__box box-icon__box--small box-icon__box--gray">
                    <i className="box-icon__icon fa fa-code"></i>
                  </div>
                  <h4>Valid code</h4>
                </>
              )}
            </InViewAnim>
          </div>
          <div className="grid__item grid__item--lg-span-3 grid__item--xs-span-6">
            <InViewAnim className="box-icon" delay="400">
              {() => (
                <>
                  <div className="box-icon__box box-icon__box--small box-icon__box--gray">
                    <i className="box-icon__icon fa fa-user-tie"></i>
                  </div>
                  <h4>Post release support</h4>
                </>
              )}
            </InViewAnim>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default () => (
  <StaticQuery
    query={graphql`
      query {
        bgImage: file(relativePath: { eq: "bg_development_1920.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Development bgImage={data.bgImage.childImageSharp.fluid} />
    )}
  />
)
