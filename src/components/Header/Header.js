import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import classNames from "classnames"
import Menu from "../Menu"

const Header = ({ activePath, className, items, siteTitle }) => {
  const [isMenuVisible, setMenuVisibility] = useState(false)

  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "logo.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 46, height: 46, quality: 90, layout: FIXED)
        }
      }
    }
  `)

  const handleButtonClick = () => {
    setMenuVisibility(!isMenuVisible)
  }

  const handleItemClick = () => {
    // close menu when clicked on a menu item
    setMenuVisibility(false)
  }

  return (
    <header className={classNames("page-header", className)}>
      <div className="container page-header-inner">
        <Link to="/" className="page-header-inner__logo el-relative">
          <div className="decoration-border decoration-border--top decoration-border--small"></div>
          <div className="decoration-border decoration-border--bottom decoration-border--small"></div>
          <GatsbyImage
            image={data.logo.childImageSharp.gatsbyImageData}
            className="el-full"
            alt="AT logo"
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
