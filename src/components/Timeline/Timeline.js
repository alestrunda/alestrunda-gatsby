import React from "react"
import TimelineItem from "./TimelineItem"

const DELAY_INIT = 200
const DELAY_STEP = 100

const events = [
  {
    content: <>First experience with web development in a school project.</>,
    from: 2006,
    title: "First dev experience",
  },
  {
    content: <>Studying IT at VUT Brno</>,
    from: 2009,
    title: "IT university",
    to: 2014,
  },
  {
    content: (
      <>First part-time job as WordPress developer at Nexdesign web studio.</>
    ),
    from: 2012,
    title: "First part-time job",
  },
  {
    content: (
      <>
        Full-time freelancer - mainly front-end and WordPress developer. Working
        for end clients and dozens of web studios over the years.
      </>
    ),
    from: 2014,
    title: "Self-employed",
    to: 2019,
  },
  {
    content: (
      <>
        Cooperating with other freelancers to develop templates and sell them on
        ThemeForest.
      </>
    ),
    from: 2014,
    title: "ThemeForest developer",
    to: 2015,
  },
  {
    content: (
      <>First project using modern JavaScript - web app built on React.</>
    ),
    from: 2017,
    title: "React.js",
  },
  {
    content: (
      <>
        BSc degree, thesis: educational web and mobile app in React and React
        Native.
      </>
    ),
    from: 2019,
    title: "IT degree",
  },
  {
    content: <>Full-time job as a Front-end Developer.</>,
    from: 2019,
    title: "QCM",
  },
  {
    content: (
      <>Full-time job as a Software Engineer in an international company.</>
    ),
    from: 2020,
    title: "Solar Winds",
  },
]

const Timeline = () => (
  <div className="timeline">
    {events.map((event, i) => (
      <TimelineItem
        delay={DELAY_INIT + DELAY_STEP * i}
        from={event.from}
        key={i}
        reverse={i % 2 ? true : false}
        title={event.title}
        to={event.to}
      >
        {event.content}
      </TimelineItem>
    ))}
  </div>
)

export default Timeline
