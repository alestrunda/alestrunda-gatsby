import React, { useState } from "react"
import Img from "gatsby-image"
import { InView } from "react-intersection-observer"

const ParallaxBackground = ({ bgImage, children, rate }) => {
  const [scrollTop, setScrollTop] = useState(0)

  const handleViewChange = inView => {
    if (inView) {
      window.addEventListener("scroll", handleScroll)
    } else {
      window.removeEventListener("scroll", handleScroll)
    }
  }

  const handleScroll = () => {
    setScrollTop(window.pageYOffset)
  }

  return (
    <InView className="bg-wrapper" onChange={handleViewChange}>
      <Img
        style={{
          //works only from the top of the page, otherwise would also need to consider position of the image relative to the page
          transform: `translateY(${scrollTop * rate}px)`,
        }}
        fluid={bgImage}
        className="bg-img"
        alt=""
      />
      {children}
    </InView>
  )
}

ParallaxBackground.defaultProps = {
  rate: 0.5,
}

export default ParallaxBackground
