import React from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import { Link as LinkScroll } from "react-scroll"

const Menu = ({ activePath, items, scrollOffset }) => (
  <ul>
    {items.map(item => {
      const { to, text, ...rest } = item
      const Component = to[0] === "/" ? Link : LinkScroll
      const extraProps = {}
      if (Component === LinkScroll) {
        extraProps.offset = scrollOffset
        extraProps.smooth = true
      }
      return (
        <li
          key={to}
          className={classNames({
            active: to === activePath,
          })}
        >
          <Component to={to} {...extraProps} {...rest}>
            <div className="nav-main__link">{text}</div>
          </Component>
        </li>
      )
    })}
  </ul>
)

export default Menu
