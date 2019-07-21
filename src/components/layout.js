import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"
import Header from "./header"

import "@fortawesome/fontawesome-free/css/all.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../scss/main.scss"

const Layout = ({ headerClassName, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="content-all">
      <Header
        className={headerClassName}
        siteTitle={data.site.siteMetadata.title}
      />
      <main className="content-main">{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
