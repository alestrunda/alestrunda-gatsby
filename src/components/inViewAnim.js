import React, { useState } from "react"
import { InView } from "react-intersection-observer"
import classNames from "classnames"

const InViewAnim = ({ animation, children, className, delay, element }) => {
  const [isAnimated, setIsAnimated] = useState(false)

  return (
    <InView triggerOnce={true}>
      {({ inView, ref }) => {
        setTimeout(() => setIsAnimated(inView), delay)
        const Component = element
        return (
          <Component
            className={classNames("animated", className, {
              [animation]: isAnimated,
            })}
            ref={ref}
          >
            {children(isAnimated)}
          </Component>
        )
      }}
    </InView>
  )
}

InViewAnim.defaultProps = {
  animation: "anim-fade-in-up",
  delay: 200,
  element: "div",
}

export default InViewAnim
