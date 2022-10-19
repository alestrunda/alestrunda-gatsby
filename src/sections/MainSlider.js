import React from "react"
import Slider from "react-slick"
import { StaticQuery, graphql } from "gatsby"
import { Link as LinkScroll } from "react-scroll"
import ArrowDots from "../components/ArrowDots"
import ParallaxBackground from "../components/ParallaxBackground"
import { SCROLL_OFFSET_TOP } from "../constants"

const MainSlider = ({ bgImage }) => (
  <section className="section-top" id="top">
    <ParallaxBackground bgImage={bgImage}>
      <div className="section-top__inner">
        <div className="container container--full">
          <Slider
            className="slider-top"
            autoplay={true}
            autoplaySpeed={4000}
            speed={800}
            nextArrow={<ArrowDots type="next" />}
            prevArrow={<ArrowDots type="prev" />}
            slidesToShow={1}
            slidesToScroll={1}
            draggable={false}
            pauseOnHover={false}
            fade={true}
          >
            <div className="slider-top__slide">
              <div className="heading-box heading-box--bg heading-box--offset-bottom">
                <div className="decoration-border decoration-border--white decoration-border--top decoration-border--mid"></div>
                <div className="decoration-border decoration-border--white decoration-border--bottom decoration-border--mid"></div>
                <h2 className="heading-box__title--huge text-white">
                  Frontend developer
                </h2>
              </div>
              <br />
              also working as <h2 className="text-highlight">full-stack</h2>
            </div>
            <div className="slider-top__slide">
              <div className="heading-box heading-box--bg heading-box--offset-bottom">
                <div className="decoration-border decoration-border--white decoration-border--top decoration-border--mid"></div>
                <div className="decoration-border decoration-border--white decoration-border--bottom decoration-border--mid"></div>
                <h2 className="heading-box__title--huge text-white">
                  Javascript
                </h2>
              </div>
              <br />
              senior <h2 className="text-highlight">React</h2> developer
            </div>
            <div className="slider-top__slide">
              <div className="heading-box heading-box--bg heading-box--offset-bottom">
                <div className="decoration-border decoration-border--white decoration-border--top decoration-border--mid"></div>
                <div className="decoration-border decoration-border--white decoration-border--bottom decoration-border--mid"></div>
                <h2 className="heading-box__title--huge text-white">
                  Freelancer
                </h2>
              </div>
              <br />
              available also as a <h2 className="text-highlight">contractor</h2>
            </div>
            <div className="slider-top__slide">
              <div className="heading-box heading-box--bg heading-box--offset-bottom">
                <div className="decoration-border decoration-border--white decoration-border--top decoration-border--mid"></div>
                <div className="decoration-border decoration-border--white decoration-border--bottom decoration-border--mid"></div>
                <h2 className="heading-box__title--huge text-white">
                  WordPress
                </h2>
              </div>
              <br />
              developing <h2 className="text-highlight">WordPress</h2> themes
            </div>
          </Slider>
        </div>
        <div className="section-top__bottom">
          <div className="container">
            <LinkScroll
              className="button-more scroll-to"
              to="about"
              smooth={true}
              offset={SCROLL_OFFSET_TOP}
            >
              Continue <i className="button-more__icon fa fa-chevron-down"></i>
            </LinkScroll>
          </div>
        </div>
      </div>
    </ParallaxBackground>
  </section>
)

const mainSliderWrapper = () => (
  <StaticQuery
    query={graphql`
      {
        bgImage: file(relativePath: { eq: "bg_front_1920.jpg" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    `}
    render={(data) => (
      <MainSlider bgImage={data.bgImage.childImageSharp.gatsbyImageData} />
    )}
  />
)

export default mainSliderWrapper
