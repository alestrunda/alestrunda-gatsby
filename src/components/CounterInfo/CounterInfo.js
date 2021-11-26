import React from "react"
import classNames from "classnames"
import CountUp from "react-countup"

const CounterInfo = ({
  delay,
  duration,
  iconClassName,
  prefix,
  started,
  suffix,
  text,
  value,
}) => (
  <div className="box-info">
    <p className="box-info__val">
      {value === 0 && 0}
      {value > 0 && (
        <>
          {prefix ?? prefix}
          {!started && 0}
          {started && <CountUp end={value} delay={delay} duration={duration} />}
          {suffix ?? suffix}
        </>
      )}
    </p>
    <div className="box-info__detail">
      <div className="box-info__icon icon-box">
        <i className={classNames("icon-box__icon", iconClassName)}></i>
      </div>
      {text}
    </div>
  </div>
)

CounterInfo.defaultProps = {
  delay: 0.3, //sec
  duration: 5, //sec
}

export default CounterInfo
