import React from "react"
import PropTypes from "prop-types"

const FilterButton = ({ filter, onClick, title }) => {
  const handleClick = () => {
    onClick(filter)
  }

  return (
    <button className="list-filters__link" onClick={handleClick}>
      {title}
    </button>
  )
}

FilterButton.propTypes = {
  filter: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
}

FilterButton.defaultProps = {
  filter: "",
}

export default FilterButton
