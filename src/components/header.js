import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link as LinkScroll } from "react-scroll"
import classNames from "classnames"

const Header = ({ className, siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.jpg" }) {
        childImageSharp {
          fixed(width: 46, height: 46) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header id="page-header" className={classNames("page-header", className)}>
      <div className="container page-header-inner">
        <Link to="/" className="page-header-inner__logo el-relative">
          <div className="decoration-border decoration-border--top decoration-border--small"></div>
          <div className="decoration-border decoration-border--bottom decoration-border--small"></div>
          <Img
            fixed={data.logo.childImageSharp.fixed}
            className="el-full"
            alt="alestrunda logo"
          />
        </Link>
        <h1 className="page-header-inner__title heading-site-title">
          {siteTitle}
        </h1>
        <div id="main-nav-btn" className="nav-btn">
          <i className="fa fa-reorder"></i>
        </div>
        <nav id="main-page-nav" className="nav-main">
          <ul id="main-menu-list">
            <li className="active">
              <LinkScroll to="top" smooth={true}>
                <div className="nav-main__link">Home</div>
              </LinkScroll>
            </li>
            <li>
              <LinkScroll to="about" smooth={true} offset={-70}>
                <div className="nav-main__link">About me</div>
              </LinkScroll>
            </li>
            <li>
              <LinkScroll to="portfolio" smooth={true} offset={-70}>
                <div className="nav-main__link">Portfolio</div>
              </LinkScroll>
            </li>
            <li>
              <LinkScroll to="news" smooth={true} offset={-70}>
                <div className="nav-main__link">News</div>
              </LinkScroll>
            </li>
            <li>
              <LinkScroll to="services" smooth={true} offset={-70}>
                <div className="nav-main__link">Services</div>
              </LinkScroll>
            </li>
            <li>
              <LinkScroll to="contact" smooth={true} offset={-70}>
                <div className="nav-main__link">Contact</div>
              </LinkScroll>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
