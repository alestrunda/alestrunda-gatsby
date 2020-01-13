import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import classNames from "classnames"
import Menu from "../Menu"

const Header = ({ activePath, className, items, siteTitle }) => {
  const scrollOffset = -65
  const [isMenuVisible, setMenuVisibility] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.jpg" }) {
        childImageSharp {
          fixed(width: 46, height: 46, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const handleButtonClick = () => {
    setMenuVisibility(!isMenuVisible)
  }

  const handleItemClick = () => {
    setMenuVisibility(false) //make sure to close menu after clicked on menu item
  }

  return (
    <header className={classNames("page-header", className)}>
      <div className="container page-header-inner">
        <Link to="/" className="page-header-inner__logo el-relative">
          <div className="decoration-border decoration-border--top decoration-border--small"></div>
          <div className="decoration-border decoration-border--bottom decoration-border--small"></div>
          <Img
            fixed={data.logo.childImageSharp.fixed}
            className="el-full"
            alt="ales trunda logo"
          />
        </Link>
        <h1 className="page-header-inner__title heading-site-title">
          {siteTitle}
        </h1>
        <button className="nav-btn" onClick={handleButtonClick}>
          <i className="fa fa-bars"></i>
        </button>
        <nav
          className="nav-main"
          style={{ display: isMenuVisible ? "block" : "none" }}
        >
          <Menu
            activePath={activePath}
            items={items}
            onItemClick={handleItemClick}
            scrollOffset={scrollOffset}
          />
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  items: PropTypes.array,
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  items: [],
  siteTitle: ``,
}

export default Header
