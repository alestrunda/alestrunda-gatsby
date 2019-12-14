import React from "react"
import classNames from "classnames"

const ArrowDots = ({ onClick, type }) => (
  <button
    className={classNames(`slick-${type}`, "slider-arrow-super")}
    onClick={onClick}
  >
    <span className="slider-arrow-super__dot slider-arrow-super__dot--1"></span>
    <span className="slider-arrow-super__dot slider-arrow-super__dot--2"></span>
    <span className="slider-arrow-super__dot slider-arrow-super__dot--3"></span>
    <span className="slider-arrow-super__dot slider-arrow-super__dot--4"></span>
    <span className="slider-arrow-super__dot slider-arrow-super__dot--5"></span>
    <span className="slider-arrow-super__dot slider-arrow-super__dot--6"></span>
    <span className="slider-arrow-super__dot slider-arrow-super__dot--7"></span>
  </button>
)

export default ArrowDots
