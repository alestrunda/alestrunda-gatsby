import React from "react"
import TimelineItem from "./TimelineItem"

const DELAY_INIT = 200
const DELAY_STEP = 100

const Timeline = () => (
  <div className="timeline">
    <TimelineItem delay={DELAY_INIT} from={2006} title="First experience">
      First experience with web development in a school project.
    </TimelineItem>
    <TimelineItem
      delay={DELAY_INIT + DELAY_STEP}
      from={2012}
      reverse
      title="First part-time job"
    >
      First part-time job as WordPress developer at Nexdesign web studio.
    </TimelineItem>
    <TimelineItem
      delay={DELAY_INIT + DELAY_STEP * 2}
      from={2014}
      title="Self-employed"
    >
      Full-time freelancer - mainly front-end and WordPress developer. Working
      for end clients and dozens of web studios over the years.
    </TimelineItem>
    <TimelineItem
      delay={DELAY_INIT + DELAY_STEP * 3}
      from={2014}
      reverse
      to={2015}
      title="ThemeForest developer"
    >
      Cooperating with other freelancers to develop templates and sell them on
      ThemeForest.
    </TimelineItem>
    <TimelineItem
      delay={DELAY_INIT + DELAY_STEP * 4}
      from={2017}
      title="React.js"
    >
      First project using modern JavaScript - web app build on React.
    </TimelineItem>
    <TimelineItem
      delay={DELAY_INIT + DELAY_STEP * 5}
      from={2019}
      reverse
      title="IT university"
    >
      BSc degree, thesis: educational web and mobile app in React and React
      Native.
    </TimelineItem>
    <TimelineItem delay={DELAY_INIT + DELAY_STEP * 6} from={2019} title="QCM">
      Full-time job as a front-end developer.
    </TimelineItem>
    <TimelineItem
      delay={DELAY_INIT + DELAY_STEP * 6}
      from={2020}
      reverse
      title="Solar Winds"
    >
      Full-time job as a full-stack developer in an international company.
    </TimelineItem>
  </div>
)

export default Timeline
