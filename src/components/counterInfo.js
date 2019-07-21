import React from "react"
import classNames from "classnames"
import CountUp from "react-countup"

const CounterInfo = ({ duration, iconClassName, started, text, value }) => (
  <div className="box-info">
    <p className="box-info__val">
      {value === 0 && 0}
      {value > 0 && (
        <>
          {!started && 0}
          {started && <CountUp end={value} duration={duration} />}
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
  duration: 3, //sec
}

export default CounterInfo
