import React from "react"
import CounterInfo from "../components/counterInfo"
import InViewAnim from "../components/inViewAnim"

const Stats = () => (
  <section
    id="stats"
    className="bg-parallax bg-stats"
    data-stellar-background-ratio="0.4"
  >
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
            {isAnimated => (
              <CounterInfo
                iconClassName="fa fa-smile"
                text="satisfied clients"
                value={62}
                started={isAnimated}
                duration={4}
              />
            )}
          </InViewAnim>
          <InViewAnim
            className="grid__item grid__item--xl-span-3 grid__item--lg-span-6 grid__item--break-md-50"
            delay="200"
          >
            {isAnimated => (
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
            {isAnimated => (
              <CounterInfo
                iconClassName="fa fa-book"
                text="blogs about web development I'm following"
                value={4}
                started={isAnimated}
              />
            )}
          </InViewAnim>
          <InViewAnim
            className="grid__item grid__item--xl-span-3 grid__item--lg-span-6 grid__item--break-lg-50"
            delay="400"
          >
            {isAnimated => (
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

export default Stats
