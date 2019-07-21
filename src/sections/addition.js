import React from "react"
import InViewAnim from "../components/inViewAnim"

const Addition = () => (
  <section id="addition" className="bg-addition bg-fixed">
    <div className="section-dark section-content section-content--bottom-smaller text-gray-light">
      <div className="container">
        <div className="text-center">
          <header className="heading-box">
            <div className="decoration-border decoration-border--top decoration-border--tiny"></div>
            <div className="decoration-border decoration-border--bottom decoration-border--tiny"></div>
            <h1 className="heading-box__title">Additional Info</h1>
          </header>
        </div>
        <div className="grid">
          <div className="grid__item grid__item--lg-span-6">
            <ul className="list-checks">
              <InViewAnim
                className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                animation="anim-list-check"
                element="li"
              >
                {() => <div>5+ years since I started making websites</div>}
              </InViewAnim>
              <InViewAnim
                className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                animation="anim-list-check"
                delay="250"
              >
                {() => <div>3+ years working as freelancer</div>}
              </InViewAnim>
              <InViewAnim
                className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                animation="anim-list-check"
                delay="450"
              >
                {() => <div>university education in IT</div>}
              </InViewAnim>
              <InViewAnim
                className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                animation="anim-list-check"
                delay="300"
              >
                {() => <div>externally working for several web studios</div>}
              </InViewAnim>
              <InViewAnim
                className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                animation="anim-list-check"
                delay="350"
              >
                {() => <div>mobile app on Google Play</div>}
              </InViewAnim>
              <InViewAnim
                className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                animation="anim-list-check"
                delay="400"
              >
                {() => <div>6 templates on ThemeForest</div>}
              </InViewAnim>
              <InViewAnim
                className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                animation="anim-list-check"
                delay="500"
              >
                {() => <div>regulary following news on web development</div>}
              </InViewAnim>
            </ul>
          </div>
          <div className="grid__item grid__item--lg-span-6">
            <ul className="list-checks">
              <InViewAnim
                className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                animation="anim-list-check"
                delay="250"
              >
                {() => <div>available for full-time jobs</div>}
              </InViewAnim>
              <InViewAnim
                className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                animation="anim-list-check"
                delay="300"
              >
                {() => <div>available for long-term projects</div>}
              </InViewAnim>
              <InViewAnim
                className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                animation="anim-list-check"
                delay="350"
              >
                {() => <div>every day on email</div>}
              </InViewAnim>
              <InViewAnim
                className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                animation="anim-list-check"
                delay="400"
              >
                {() => <div>used to finish projects entirely</div>}
              </InViewAnim>
              <InViewAnim
                className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                animation="anim-list-check"
                delay="450"
              >
                {() => <div>team player</div>}
              </InViewAnim>
              <InViewAnim
                className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                animation="anim-list-check"
                delay="550"
              >
                {() => <div>wiling to relocate</div>}
              </InViewAnim>
              <InViewAnim
                className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                animation="anim-list-check"
                delay="550"
              >
                {() => <div>8 hours per week self-studying</div>}
              </InViewAnim>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Addition
