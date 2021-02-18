import React from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import { Link as LinkScroll } from "react-scroll"
import { SCROLL_OFFSET_TOP } from "../../constants"

const Menu = ({ activePath, items, onItemClick, scrollOffset }) => (
  <ul>
    {items.map((item) => {
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
          <Component to={to} onClick={onItemClick} {...extraProps} {...rest}>
            <div className="nav-main__link">{text}</div>
          </Component>
        </li>
      )
    })}
  </ul>
)

Menu.defaultProps = {
  scrollOffset: SCROLL_OFFSET_TOP,
}

export default Menu
