import React from "react"
import InViewAnim from "../components/InViewAnim"
import Timeline from "../components/Timeline"

const About = () => (
  <section id="about">
    <div className="section-light section-content">
      <div className="container">
        <div className="text-center">
          <header className="heading-box">
            <div className="decoration-border decoration-border--top decoration-border--tiny"></div>
            <div className="decoration-border decoration-border--bottom decoration-border--tiny"></div>
            <h1 className="heading-box__title">About me</h1>
          </header>
        </div>
        <div className="bg-icon">
          <i className="bg-icon__icon bg-icon__icon--top fa fa-laptop-code"></i>
          <i className="bg-icon__icon bg-icon__icon--bottom fa fa-clock-rotate-left"></i>
          <Timeline />
        </div>
        <div className="grid text-center">
          <InViewAnim className="grid__item grid__item--lg-span-4" delay="100">
            {() => (
              <div className="box-icon box-icon--offset-top mb0">
                <div className="box-icon__box">
                  <div className="decoration-border decoration-border--top decoration-border--smaller"></div>
                  <div className="decoration-border decoration-border--bottom decoration-border--smaller"></div>
                  <i className="box-icon__icon fab fa-react"></i>
                </div>
                <h2>Vast Experience</h2>
                <p>
                  Over about 10 years of being a professional software engineer,
                  I've worked in many industries and for companies of various
                  sizes.
                </p>
              </div>
            )}
          </InViewAnim>
          <InViewAnim className="grid__item grid__item--lg-span-4" delay="400">
            {() => (
              <div className="box-icon box-icon--offset-top mb0">
                <div className="box-icon__box">
                  <div className="decoration-border decoration-border--top decoration-border--smaller"></div>
                  <div className="decoration-border decoration-border--bottom decoration-border--smaller"></div>
                  <i className="box-icon__icon fa fa-wrench"></i>
                </div>
                <h2>Precise Development</h2>
                <p>
                  My focus is on complex tailored solutions. Without depending
                  on templates or low-code tools.
                </p>
              </div>
            )}
          </InViewAnim>
          <InViewAnim className="grid__item grid__item--lg-span-4" delay="700">
            {() => (
              <div className="box-icon box-icon--offset-top mb0">
                <div className="box-icon__box">
                  <div className="decoration-border decoration-border--top decoration-border--smaller"></div>
                  <div className="decoration-border decoration-border--bottom decoration-border--smaller"></div>
                  <i className="box-icon__icon fa fa-file-code"></i>
                </div>
                <h2>High quality code</h2>
                <p>
                  linters, speed optimizations, cross-browser support, design
                  patterns, automated tests, best security practices,
                  accessibility, on-page SEO...
                </p>
              </div>
            )}
          </InViewAnim>
        </div>
      </div>
    </div>
  </section>
)

export default About
