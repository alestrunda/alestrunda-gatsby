import React from "react"
import classNames from "classnames"

const IconOpeningSmall = ({ children, iconClassName }) => (
  <div className="icon-opening-small">
    <div className="icon-opening-small__icon">
      <i className={classNames("icon-simple", iconClassName)}></i>
    </div>
    {children}
  </div>
)

export default IconOpeningSmall
