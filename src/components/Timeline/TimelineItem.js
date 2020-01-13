import React from "react"
import classNames from "classnames"
import InViewAnim from "../InViewAnim"

const TimelineItem = ({ children, delay, from, reverse, to, title }) => (
  <div
    className={classNames("timeline-date", {
      "timeline-date--reverse": reverse,
    })}
  >
    <div className="timeline-date__date">
      <InViewAnim
        animation={`anim-fade-in-${reverse ? "right" : "left"}`}
        delay={delay}
      >
        {() => (
          <div
            className={classNames(
              "date-range",
              reverse ? "date-range--left" : "date-range--right"
            )}
          >
            {from}
            {to && (
              <>
                <div className="date-range__dot"></div>
                <div className="date-range__dot"></div>
                <div className="date-range__dot"></div>
                {to}
              </>
            )}
          </div>
        )}
      </InViewAnim>
    </div>
    <div className="timeline-date__content">
      <InViewAnim
        animation={`anim-fade-in-${reverse ? "left" : "right"}`}
        className={classNames(
          "box-border",
          reverse ? "box-border--right" : "box-border--left"
        )}
        delay={delay + 500}
      >
        {() => (
          <>
            <h3 className="heading-small mt0">{title}</h3>
            {children}
          </>
        )}
      </InViewAnim>
    </div>
  </div>
)

export default TimelineItem
