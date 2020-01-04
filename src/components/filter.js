import React, { useState } from "react"
import classNames from "classnames"
import FilterButton from "./filterButton"

const Filter = ({ activeFilter, featuredFilters, filters, onFilter }) => {
  const [showAllFilters, setFiltersVisibility] = useState(false)

  let filtersShowed = filters
  if (featuredFilters && !showAllFilters) {
    filtersShowed = filters.filter(filter => featuredFilters.includes(filter))
  }
  const showAllFiltersButton =
    !showAllFilters && filtersShowed.length !== filters

  const handleFiltersBtnClick = () => {
    setFiltersVisibility(true)
  }

  return (
    <>
      <ul className="list-filters">
        <li
          className={classNames("list-filters__item", {
            active: !activeFilter,
          })}
        >
          <FilterButton title="All" onClick={onFilter} />
        </li>
        {filtersShowed.map((filter, index) => (
          <li
            key={index}
            className={classNames("list-filters__item", {
              active: activeFilter === filter,
            })}
          >
            <FilterButton filter={filter} title={filter} onClick={onFilter} />
          </li>
        ))}
      </ul>
      {showAllFiltersButton && (
        <>
          <br />
          <button className="link-regular" onClick={handleFiltersBtnClick}>
            Show all filters
          </button>
        </>
      )}
    </>
  )
}

export default Filter
