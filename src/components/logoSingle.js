import React from "react"

const LogoSingle = ({ src, title }) => (
  <div
    className="logo-single tooltip tooltip--top tooltip--dark"
    data-title={title}
  >
    <img className="logo-single__img" alt={title} height="45" src={src} />
  </div>
)

export default LogoSingle
