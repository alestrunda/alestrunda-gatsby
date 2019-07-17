import React from "react"

const MainSlider = () => (
  <section class="section-top">
    <div
      class="section-top__inner"
      data-0="background-position: center 0px"
      data-1000="background-position: center 420px"
    >
      <div class="container container--full">
        <div id="slider-top" class="slider-top">
          <div class="slider-top__slide">
            <div class="heading-box heading-box--bg heading-box--offset-bottom">
              <div class="decoration-border decoration-border--white decoration-border--top decoration-border--mid"></div>
              <div class="decoration-border decoration-border--white decoration-border--bottom decoration-border--mid"></div>
              <h1 class="heading-box__title--huge text-white">Title</h1>
            </div>
            <br />
            Lorem ipsum
          </div>
        </div>
      </div>
      <div class="section-top__bottom">
        <div class="container">
          <a class="button-more scroll-to" href="#about">
            Continue <i class="button-more__icon fa fa-chevron-down"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default MainSlider
