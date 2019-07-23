import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { menuPage } from "../menuItems"

const NotFoundPage = ({ location }) => {
  return (
    <Layout activePath="/blog/" menuItems={menuPage}>
      <SEO title="404: Not found" />
      <div className="page-title">
        <div className="container">
          <h1 className="heading-page">Page not found</h1>
        </div>
      </div>
      <div className="section-light section-content">
        <div className="container text-center text-big paragraphs-huge">
          <p>
            Requested page{" "}
            <strong className="text-yellow">{location.pathname}</strong> does
            not exist.
            <br />
            Make sure the page url is correct.
          </p>
          <p>If you believe this is an error, please let me know.</p>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage
