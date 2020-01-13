import React, { useEffect, useState } from "react"
import Img from "gatsby-image"
import { InView } from "react-intersection-observer"

//has to be outside, because we need to keep referecence to this same function for addEventListener and removeEventListener
let handleScroll = func => {
  func(window.pageYOffset)
}

const ParallaxBackground = ({ bgImage, children, rate }) => {
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    handleScroll = handleScroll.bind(null, setScrollTop)
  }, [])

  const handleViewChange = inView => {
    if (inView) {
      window.addEventListener("scroll", handleScroll)
    } else {
      window.removeEventListener("scroll", handleScroll)
    }
  }

  //on use effect unmount zrušit window.removeEventListener("scroll", handleScroll)

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
