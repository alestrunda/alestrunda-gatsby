import React from "react"
import { Link } from "gatsby"
import classNames from "classnames"

const Pagination = ({ current, path, total }) => {
  if (total === 1) return null
  return (
    <ul className="pagination">
      {Array.from({ length: total }).map((_, index) => {
        const page = index + 1
        const isActive = page === current
        const url = page === 1 ? path : `${path}${page}`
        return (
          <li
            className={classNames("pagination__item", {
              active: isActive,
            })}
            key={page}
          >
            {isActive && <span className="pagination__link">{page}</span>}
            {!isActive && (
              <Link className="pagination__link" to={url}>
                {page}
              </Link>
            )}
          </li>
        )
      })}
    </ul>
  )
}

Pagination.defaultProps = {
  current: 1,
}

export default Pagination
