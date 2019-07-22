import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { menuPage } from "../menuItems"

const NewsPage = () => (
  <Layout activePath="/blog/" menuItems={menuPage}>
    <SEO title="News" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default NewsPage
