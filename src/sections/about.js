import React from "react"
import InViewAnim from "../components/inViewAnim"

const About = () => (
  <section id="about">
    <div className="section-light section-content">
      <div className="container">
        <div className="text-center">
          <header className="heading-box">
            <div className="decoration-border decoration-border--top decoration-border--tiny"></div>
            <div className="decoration-border decoration-border--bottom decoration-border--tiny"></div>
            <h1 className="heading-box__title">Something about me</h1>
          </header>
        </div>
        <div className="grid">
          <InViewAnim
            className="grid__item grid__item--lg-span-6"
            animation="anim-fade-in-left"
          >
            {() => (
              <p>
                I'm web developer, more than three years I work as freelancer. I
                made my first web pages as school project in 2006, since then I
                participated in more than one hundred web projects.
              </p>
            )}
          </InViewAnim>
          <InViewAnim
            className="grid__item grid__item--lg-span-6"
            animation="anim-fade-in-right"
          >
            {() => (
              <p>
                I specialize in front-end development, however I have also
                various back-end knowledge, especially concerning WordPress
                development. I regularly study and follow several blogs to keep
                up with new technologies and trends. University studies provided
                me comprehensive programming skills.
              </p>
            )}
          </InViewAnim>
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
                <h2>Modern Technologies</h2>
                <p>
                  Using modern technologies like React, Gatsby, ES6+, WordPress
                  REST API, GraphQL, webpack...
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
                <p>Tailor-made projects instead of third-party templates</p>
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
                <h2>Clean code</h2>
                <p>
                  High quality code, linters, prettier, cross-browser support,
                  optimizations, on-page SEO, responsive web design...
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
