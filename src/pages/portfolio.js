import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import SectionPortfolio from "../sections/Portfolio"
import { menuPage } from "../menuItems"

const PortfolioPage = () => (
  <Layout activePath="/portfolio/" menuItems={menuPage}>
    <SEO title="Portfolio" />
    <SectionPortfolio />
  </Layout>
)

export default PortfolioPage
