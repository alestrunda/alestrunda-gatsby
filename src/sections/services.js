import React from "react"
import InViewAnim from "../components/InViewAnim"

const Services = () => {
  const delayStep = 50
  const delayInit = 200

  return (
    <section id="services" className="bg-services bg-fixed">
      <div className="section-dark section-content section-content--bottom-smaller text-gray-light">
        <div className="container container-limit2">
          <div className="text-center">
            <header className="heading-box">
              <div className="decoration-border decoration-border--top decoration-border--tiny"></div>
              <div className="decoration-border decoration-border--bottom decoration-border--tiny"></div>
              <h1 className="heading-box__title">Services</h1>
            </header>
          </div>
          <div className="grid">
            <div className="grid__item grid__item--md-span-6">
              <ul className="list-checks">
                <InViewAnim
                  className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                  animation="anim-list-check"
                  element="li"
                  dalay={delayInit}
                >
                  {() => <>React &amp; Redux, Vue, jQuery</>}
                </InViewAnim>
                <InViewAnim
                  className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                  animation="anim-list-check"
                  element="li"
                  delay={delayInit + delayStep * 1}
                >
                  {() => <>ES6+, npm, yarn, webpack</>}
                </InViewAnim>
                <InViewAnim
                  className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                  animation="anim-list-check"
                  element="li"
                  delay={delayInit + delayStep * 2}
                >
                  {() => <>CSS3, SASS, ITCSS, BEM</>}
                </InViewAnim>
                <InViewAnim
                  className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                  animation="anim-list-check"
                  element="li"
                  delay={delayInit + delayStep * 3}
                >
                  {() => <>SPA &amp; PWA</>}
                </InViewAnim>
                <InViewAnim
                  className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                  animation="anim-list-check"
                  element="li"
                  delay={delayInit + delayStep * 4}
                >
                  {() => <>JAM stack</>}
                </InViewAnim>
                <InViewAnim
                  className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                  animation="anim-list-check"
                  element="li"
                  delay={delayInit + delayStep * 5}
                >
                  {() => <>CMS Gatsby (React)</>}
                </InViewAnim>
                <InViewAnim
                  className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                  animation="anim-list-check"
                  element="li"
                  delay={delayInit + delayStep * 6}
                >
                  {() => <>Git</>}
                </InViewAnim>
              </ul>
            </div>
            <div className="grid__item grid__item--md-span-6">
              <ul className="list-checks mb0">
                <InViewAnim
                  className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                  animation="anim-list-check"
                  element="li"
                  delay={delayInit}
                >
                  {() => <>Node.js &amp; Express</>}
                </InViewAnim>
                <InViewAnim
                  className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                  animation="anim-list-check"
                  element="li"
                  delay={delayInit + delayStep * 1}
                >
                  {() => <>WordPress &amp; Woocommerce</>}
                </InViewAnim>
                <InViewAnim
                  className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                  animation="anim-list-check"
                  element="li"
                  delay={delayInit + delayStep * 2}
                >
                  {() => <>React Native</>}
                </InViewAnim>
                <InViewAnim
                  className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                  animation="anim-list-check"
                  element="li"
                  delay={delayInit + delayStep * 3}
                >
                  {() => <>SQL / NOSQL database</>}
                </InViewAnim>
                <InViewAnim
                  className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                  animation="anim-list-check"
                  element="li"
                  delay={delayInit + delayStep * 4}
                >
                  {() => <>GraphQL, REST API</>}
                </InViewAnim>
                <InViewAnim
                  className="list-checks__item animated--faded animated--pseudo animated--speed-mid"
                  animation="anim-list-check"
                  element="li"
                  delay={delayInit + delayStep * 5}
                >
                  {() => <>Jest, Cypress</>}
                </InViewAnim>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
