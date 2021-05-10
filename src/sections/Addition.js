import React from "react"
import InViewAnim from "../components/InViewAnim"

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
                {() => (
                  <>
                    {`${FIRST_WORKING_EXPERIENCE}`}+ years since I started
                    making websites
                  </>
                )}
              </InViewAnim>
              <InViewAnim
                className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                animation="anim-list-check"
                element="li"
                delay="250"
              >
                {() => (
                  <>
                    {`${PROFESSIONAL_CAREER_START_YEAR}`}+ years working as
                    freelancer
                  </>
                )}
              </InViewAnim>
              <InViewAnim
                className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                animation="anim-list-check"
                element="li"
                delay="450"
              >
                {() => <>have degree in computer science</>}
              </InViewAnim>
              <InViewAnim
                className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                animation="anim-list-check"
                element="li"
                delay="300"
              >
                {() => <>worked for dozens of web studios</>}
              </InViewAnim>
              <InViewAnim
                className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                animation="anim-list-check"
                element="li"
                delay="350"
              >
                {() => <>published mobile app on Google Play</>}
              </InViewAnim>
              <InViewAnim
                className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                animation="anim-list-check"
                element="li"
                delay="400"
              >
                {() => <>developed 6 templates for ThemeForest</>}
              </InViewAnim>
              <InViewAnim
                className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                animation="anim-list-check"
                element="li"
                delay="500"
              >
                {() => <>regulary following news on web development</>}
              </InViewAnim>
            </ul>
          </div>
          <div className="grid__item grid__item--lg-span-6">
            <ul className="list-checks">
              <InViewAnim
                className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                animation="anim-list-check"
                element="li"
                delay="250"
              >
                {() => <>available for full-time jobs</>}
              </InViewAnim>
              <InViewAnim
                className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                animation="anim-list-check"
                element="li"
                delay="300"
              >
                {() => <>available for long-term projects</>}
              </InViewAnim>
              <InViewAnim
                className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                animation="anim-list-check"
                element="li"
                delay="350"
              >
                {() => <>reachable every day</>}
              </InViewAnim>
              <InViewAnim
                className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                animation="anim-list-check"
                element="li"
                delay="400"
              >
                {() => <>used to finish projects entirely</>}
              </InViewAnim>
              <InViewAnim
                className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                animation="anim-list-check"
                element="li"
                delay="450"
              >
                {() => <>team player</>}
              </InViewAnim>
              <InViewAnim
                className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                animation="anim-list-check"
                element="li"
                delay="550"
              >
                {() => <>wiling to relocate</>}
              </InViewAnim>
              <InViewAnim
                className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                animation="anim-list-check"
                element="li"
                delay="550"
              >
                {() => <>keen about studying and improvement</>}
              </InViewAnim>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Addition
