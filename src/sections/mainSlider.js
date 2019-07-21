import React from "react"
import Slider from "react-slick"
import { Link as LinkScroll } from "react-scroll"
import ArrowDots from "../components/arrowDots"

const MainSlider = () => (
  <section className="section-top" id="top">
    <div
      className="section-top__inner"
      data-0="background-position: center 0px"
      data-1000="background-position: center 420px"
    >
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
                Freelancer
              </h2>
            </div>
            <br />I focus mainly on{" "}
            <h2 className="text-highlight">front-end</h2> and{" "}
            <h2 className="text-highlight">react</h2>
          </div>
          <div className="slider-top__slide">
            <div className="heading-box heading-box--bg heading-box--offset-bottom">
              <div className="decoration-border decoration-border--white decoration-border--top decoration-border--mid"></div>
              <div className="decoration-border decoration-border--white decoration-border--bottom decoration-border--mid"></div>
              <h2 className="heading-box__title--huge text-white">WordPress</h2>
            </div>
            <br />I also develop <h2 className="text-highlight">WordPress</h2>
            themes
          </div>
        </Slider>
      </div>
      <div className="section-top__bottom">
        <div className="container">
          <LinkScroll
            className="button-more scroll-to"
            to="about"
            smooth={true}
            offset={-70}
          >
            Continue <i className="button-more__icon fa fa-chevron-down"></i>
          </LinkScroll>
        </div>
      </div>
    </div>
  </section>
)

export default MainSlider
