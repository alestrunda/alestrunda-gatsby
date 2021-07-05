import React from "react"
import Layout from "../components/Layout"
import PageSeo from "../components/PageSeo"
import SectionPortfolio from "../sections/Portfolio"
import { menuPage } from "../menuItems"

const PortfolioPage = () => (
  <Layout activePath="/portfolio/" menuItems={menuPage}>
    <PageSeo title="Portfolio" />
    <SectionPortfolio />
  </Layout>
)

export default PortfolioPage
