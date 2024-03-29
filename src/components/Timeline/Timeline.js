import React from "react"
import TimelineItem from "./TimelineItem"
import { isEven } from "../../helpers"

const DELAY_INIT = 200 //ms
const DELAY_STEP = 100 //ms

const events = [
  {
    content: (
      <>First developer experience in a school project in high school.</>
    ),
    from: 2006,
    title: "First developer experience",
  },
  {
    content: <>Studying IT at VUT Brno.</>,
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
        Cooperating with other freelancers and selling templates on ThemeForest.
        Created 7 templates with more than 1500 sales in total.
      </>
    ),
    from: 2014,
    title: "ThemeForest developer",
    to: 2015,
  },
  {
    content: (
      <>
        Freelancing as a frontend and WordPress developer. And working as a
        contractor for various web studios.
      </>
    ),
    from: 2014,
    title: "Full-time freelancer",
    to: 2019,
  },
  {
    content: (
      <>First project using modern JavaScript - web app built with React.</>
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
    content: (
      <>
        Full-time job as a Frontend Developer in a well-established Czech
        company.
      </>
    ),
    from: 2019,
    title: "QCM",
    to: 2020,
  },
  {
    content: (
      <>Full-time job as a Software Engineer in international corporate.</>
    ),
    from: 2020,
    title: "SolarWinds",
    to: 2021,
  },
  {
    content: (
      <>
        Full-time job as a Frontend Developer in an international dynamically
        growing startup.
      </>
    ),
    from: 2021,
    title: "Labster",
    to: 2022,
  },
  {
    content: (
      <>
        Full-time job as a Staff Software Engineer in a big international
        cybersecurity company.
      </>
    ),
    from: 2022,
    title: "SentinelOne",
  },
]

const Timeline = () => (
  <div className="timeline">
    {events.map((event, i) => (
      <TimelineItem
        delay={DELAY_INIT + DELAY_STEP * i}
        from={event.from}
        key={i}
        reverse={isEven(i)}
        title={event.title}
        to={event.to}
      >
        {event.content}
      </TimelineItem>
    ))}
  </div>
)

export default Timeline
