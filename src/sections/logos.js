import React from "react"
import LogoSingle from "../components/logoSingle"
import Slider from "react-slick"

import imgCSS from "../images/logo/css3.svg"
import imgSass from "../images/logo/sass.svg"
import imgJS from "../images/logo/js.svg"
import imgES6 from "../images/logo/es6.svg"
import imgReact from "../images/logo/react.svg"
import imgRedux from "../images/logo/redux.svg"
import imgjQuery from "../images/logo/jquery.svg"
import imgWordPress from "../images/logo/wordpress.svg"
import imgWooCommerce from "../images/logo/woocommerce.svg"
import imgGulp from "../images/logo/gulp.svg"
import imgWebpack from "../images/logo/webpack.svg"
import imgGit from "../images/logo/git.svg"
import imgNpm from "../images/logo/npm.svg"

const Logos = () => (
  <div id="logos">
    <div className="section-extra-dark">
      <div className="container text-center">
        <Slider
          arrows={false}
          autoplay={true}
          autoplaySpeed={3000}
          dots={true}
          infinite={true}
          speed={1000}
          slidesToShow={5}
          slidesToScroll={5}
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                speed: 3500,
                slidesToShow: 4,
                slidesToScroll: 4,
              },
            },
            {
              breakpoint: 600,
              settings: {
                speed: 3000,
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
            {
              breakpoint: 480,
              settings: {
                speed: 2000,
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
          ]}
          className="slick--dots-right slick--dots-small slick--dots-fade slick--dots-white"
        >
          <div className="mt40 mb40">
            <LogoSingle title="CSS3" src={imgCSS} />
          </div>
          <div className="mt40 mb40">
            <LogoSingle title="Sass" src={imgSass} />
          </div>
          <div className="mt40 mb40">
            <LogoSingle title="JavaScript" src={imgJS} />
          </div>
          <div className="mt40 mb40">
            <LogoSingle title="ES6" src={imgES6} />
          </div>
          <div className="mt40 mb40">
            <LogoSingle title="React.js" src={imgReact} />
          </div>
          <div className="mt40 mb40">
            <LogoSingle title="Redux" src={imgRedux} />
          </div>
          <div className="mt40 mb40">
            <LogoSingle title="jQuery" src={imgjQuery} />
          </div>
          <div className="mt40 mb40">
            <LogoSingle title="WordPress" src={imgWordPress} />
          </div>
          <div className="mt40 mb40">
            <LogoSingle title="WooCommerce" src={imgWooCommerce} />
          </div>
          <div className="mt40 mb40">
            <LogoSingle title="Gulp" src={imgGulp} />
          </div>
          <div className="mt40 mb40">
            <LogoSingle title="webpack" src={imgWebpack} />
          </div>
          <div className="mt40 mb40">
            <LogoSingle title="Git" src={imgGit} />
          </div>
          <div className="mt40 mb40">
            <LogoSingle title="npm" src={imgNpm} />
          </div>
        </Slider>
      </div>
    </div>
  </div>
)

export default Logos
