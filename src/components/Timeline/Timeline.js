import React from "react"
import TimelineItem from "./TimelineItem"

const Timeline = () => {
  const delayInit = 200
  const delayStep = 100

  return (
    <div className="timeline">
      <TimelineItem delay={delayInit} from={2006} title="First experience">
        First experience with web development in a school project.
      </TimelineItem>
      <TimelineItem
        delay={delayInit + delayStep}
        from={2012}
        reverse
        title="First part-time job"
      >
        First part-time job as WordPress developer at Nexdesign web studio.
      </TimelineItem>
      <TimelineItem
        delay={delayInit + delayStep * 2}
        from={2014}
        title="Self-employed"
      >
        Full-time freelancer - mainly front-end and WordPress developer. Working
        for end clients and dozens of web studios over the years.
      </TimelineItem>
      <TimelineItem
        delay={delayInit + delayStep * 3}
        from={2014}
        reverse
        to={2015}
        title="ThemeForest developer"
      >
        Cooperating with other freelancers to develop templates and sell them on
        ThemeForest.
      </TimelineItem>
      <TimelineItem
        delay={delayInit + delayStep * 4}
        from={2017}
        title="React.js"
      >
        First project using modern JavaScript - web app build on React.
      </TimelineItem>
      <TimelineItem
        delay={delayInit + delayStep * 5}
        from={2019}
        reverse
        title="IT university"
      >
        BSc degree, thesis: educational web and mobile app in React and React
        Native.
      </TimelineItem>
      <TimelineItem delay={delayInit + delayStep * 6} from={2019} title="QCM">
        Full-time job as front-end developer.
      </TimelineItem>
      <TimelineItem
        delay={delayInit + delayStep * 6}
        from={2020}
        reverse
        title="Solar Winds"
      >
        Full-time job as a front-end developer in an international company.
      </TimelineItem>
    </div>
  )
}

export default Timeline
