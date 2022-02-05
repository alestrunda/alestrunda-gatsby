import React from "react"
import classNames from "classnames"

const Citation = ({ author, authorDetail, children, className }) => (
  <div className={classNames("citation", className)}>
    <p className="citation__content">"{children}"</p>
    <p className="citation__author">
      {author}
      {authorDetail && (
        <span className="citation__author-info">{authorDetail}</span>
      )}
    </p>
  </div>
)

export default Citation
