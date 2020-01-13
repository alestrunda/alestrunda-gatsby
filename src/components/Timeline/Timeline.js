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
        title="Freelancer"
      >
        Full time freelancer - mainly front-end and WordPress developer. Working
        for clients and various web studios.
      </TimelineItem>
      <TimelineItem
        delay={delayInit + delayStep * 3}
        from={2014}
        reverse
        to={2015}
        title="ThemeForest developer"
      >
        Cooperating with other freelancers to develop templates and selling them
        on ThemeForest.
      </TimelineItem>
      <TimelineItem
        delay={delayInit + delayStep * 4}
        from={2017}
        title="React.js"
      >
        First project using modern JavaScript - Chuck Norris Jokes app build on
        React.
      </TimelineItem>
      <TimelineItem
        delay={delayInit + delayStep * 5}
        from={2019}
        reverse
        title="IT university degree"
      >
        Thesis: educational web and mobile app in React and React Native.
      </TimelineItem>
      <TimelineItem
        delay={delayInit + delayStep * 6}
        from={2019}
        title="Front-end developer"
      >
        Full time job as front-end developer at QCM.
      </TimelineItem>
    </div>
  )
}

export default Timeline
