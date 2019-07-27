import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionPortfolio from "../sections/portfolio"
import { menuPage } from "../menuItems"

const PortfolioPage = () => {
  return (
    <Layout activePath="/portfolio/" menuItems={menuPage}>
      <SEO title="Portfolio" />
      <SectionPortfolio />
    </Layout>
  )
}

export default PortfolioPage
