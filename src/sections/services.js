import React from "react"

import imgReact from "../images/logo/react.svg"
import imgWordpress from "../images/logo/wordpress.svg"

const Services = () => {
  return (
    <section id="services">
      <div className="section-light section-content">
        <div className="container">
          <div className="text-center">
            <header className="heading-box mb0">
              <div className="decoration-border decoration-border--top decoration-border--tiny"></div>
              <div className="decoration-border decoration-border--bottom decoration-border--tiny"></div>
              <h1 className="heading-box__title">Services</h1>
            </header>
          </div>
          <div className="m50"></div>
          <div className="icon-opening-big">
            <div className="icon-opening-big__icon">
              <img width="150" height="150" src={imgReact} alt="React" />
            </div>
            <div className="icon-opening-big__content">
              <h3 className="heading-mid">My specialization is front-end</h3>
              <span className="label label--yellow label--right-big">
                HTML5
              </span>{" "}
              <span className="label label--yellow">CSS3</span>{" "}
              <span className="label label--yellow">SASS</span>{" "}
              <span className="label label--yellow">ITCSS</span>{" "}
              <span className="label label--yellow">BEM</span>{" "}
              <span className="label label--yellow label--right-big">RWD</span>{" "}
              <span className="label label--yellow">JavaScript</span>{" "}
              <span className="label label--yellow">ES6</span>{" "}
              <span className="label label--yellow">jQuery</span>{" "}
              <span className="label label--yellow">Ajax</span>{" "}
              <span className="label label--yellow label--right-big">
                Babel
              </span>{" "}
              <span className="label label--yellow">SPA</span>{" "}
              <span className="label label--yellow">PWA</span>{" "}
              <span className="label label--yellow">React</span>{" "}
              <span className="label label--yellow label--right-big">
                Redux
              </span>{" "}
              <span className="label label--yellow label--right-big">
                CMS Gatsby (React)
              </span>{" "}
              <span className="label label--yellow label--right-big">
                React native
              </span>{" "}
              <span className="label label--yellow label--right-big">
                browser compatibility
              </span>{" "}
              <span className="label label--yellow">webpack</span>{" "}
              <span className="label label--yellow">npm</span>{" "}
              <span className="label label--yellow">yarn</span>{" "}
              <span className="label label--yellow label--right-big">gulp</span>{" "}
              <span className="label label--yellow">automatic tests</span>{" "}
              <span className="label label--yellow">Jest</span>{" "}
              <span className="label label--yellow label--right-big">
                Cypress
              </span>{" "}
              <span className="label label--yellow">REST API</span>{" "}
              <span className="label label--yellow label--right-big">
                GraphQL
              </span>{" "}
              <span className="label label--yellow">git</span>{" "}
              <span className="label label--yellow">jira</span>{" "}
              <span className="label label--yellow">trello</span>{" "}
              <span className="label label--yellow">slack</span>
            </div>
          </div>
          <hr className="mt40 mb30" />
          <div className="icon-opening-big">
            <div className="icon-opening-big__icon">
              <img
                width="150"
                height="150"
                src={imgWordpress}
                alt="WordPress"
              />
            </div>
            <div className="icon-opening-big__content">
              <h3 className="heading-mid">I also do back-end</h3>
              <p>
                Mainly it's developing web sites on WordPress. Or for front-end
                applications I develop simplier back-end using node.js
                <br />I develop tailored WordPress themes, no third-party
                templates. I also build e-commerce sites on Woocommerce.
              </p>
              <p>
                Many people do not fancy WordPress. No doubt it has some
                disadvantages, but there's one undeniable fact - it's worldwide
                most popular CMS -{" "}
                <a href="https://wordpress.com/about/">
                  More than 28% of all web sites run on WordPress
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
