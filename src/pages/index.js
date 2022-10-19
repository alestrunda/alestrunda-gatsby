import React from "react"

import About from "../sections/About"
import Citation from "../sections/Citation"
import Contact from "../sections/Contact"
import Layout from "../components/Layout"
import MainSlider from "../sections/MainSlider"
import News from "../sections/News"
import Portfolio from "../sections/Portfolio"
import PageSeo from "../components/PageSeo"
import Services from "../sections/Services"
import Stats from "../sections/Stats"
import Testimonials from "../sections/Testimonials"
import { menuIndex } from "../menuItems"

const IndexPage = () => (
  <Layout
    activePath="top"
    headerClassName="page-header--fixed"
    menuItems={menuIndex}
  >
    <PageSeo title="Frontend software engineer, react developer, contractor" />
    <MainSlider />
    <About />
    <Citation />
    <Portfolio />
    <Stats />
    <News />
    <Services />
    <Testimonials />
    <Contact />
  </Layout>
)

export default IndexPage
