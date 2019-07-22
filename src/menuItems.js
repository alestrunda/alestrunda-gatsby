import React from "react"
import { Link } from "gatsby"
import { Link as LinkScroll } from "react-scroll"

export const menuIndex = [
  <LinkScroll to="top" smooth={true}>
    <div className="nav-main__link">Home</div>
  </LinkScroll>,
  <LinkScroll to="about" smooth={true} offset={-70}>
    <div className="nav-main__link">About me</div>
  </LinkScroll>,
  <LinkScroll to="portfolio" smooth={true} offset={-70}>
    <div className="nav-main__link">Portfolio</div>
  </LinkScroll>,
  <LinkScroll to="news" smooth={true} offset={-70}>
    <div className="nav-main__link">News</div>
  </LinkScroll>,
  <LinkScroll to="services" smooth={true} offset={-70}>
    <div className="nav-main__link">Services</div>
  </LinkScroll>,
  <LinkScroll to="contact" smooth={true} offset={-70}>
    <div className="nav-main__link">Contact</div>
  </LinkScroll>,
]

export const menuPage = [
  <Link to="/">
    <div className="nav-main__link">Home</div>
  </Link>,
  <Link to="/blog/">
    <div className="nav-main__link">Blog</div>
  </Link>,
]
