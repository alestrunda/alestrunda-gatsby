import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <div id="page-header" class="page-header page-header--fixed">
    <div class="container">
      <Link to="/" class="site-logo el-relative">
        <div class="decoration-border decoration-border--top decoration-border--small"></div>
        <div class="decoration-border decoration-border--bottom decoration-border--small"></div>
        <img class="site-logo__img" alt="alestrunda logo" src="" />
      </Link>
      <h1 class="heading-site-title">{siteTitle}</h1>
      <div id="main-nav-btn" class="nav-btn">
        <i class="fa fa-reorder"></i>
      </div>
      <nav id="main-page-nav" class="nav-main">
        <ul id="main-menu-list">
          <li class="active">
            <a href="#top">
              <div class="nav-main__link">Home</div>
            </a>
          </li>
          <li>
            <a href="#about">
              <div class="nav-main__link">About me</div>
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <div class="nav-main__link">Portfolio</div>
            </a>
          </li>
          <li>
            <a href="#news">
              <div class="nav-main__link">News</div>
            </a>
          </li>
          <li>
            <a href="#services">
              <div class="nav-main__link">Services</div>
            </a>
          </li>
          <li>
            <a href="#contact">
              <div class="nav-main__link">Contact</div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
