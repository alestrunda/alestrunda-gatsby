import React from "react"

import About from "../sections/about"
import Addition from "../sections/addition"
import Citation from "../sections/citation"
import Contact from "../sections/contact"
import Development from "../sections/development"
import Logos from "../sections/logos"
import MainSlider from "../sections/mainSlider"
import News from "../sections/news"
import Portfolio from "../sections/portfolio"
import Services from "../sections/services"
import Stats from "../sections/stats"
import Testimonials from "../sections/testimonials"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { menuIndex } from "../menuItems"

const IndexPage = () => (
  <Layout
    activePath="top"
    headerClassName="page-header--fixed"
    menuItems={menuIndex}
  >
    <SEO title="Home" />
    <MainSlider />
    <About />
    <Development />
    <Portfolio />
    <Stats />
    <News />
    <Citation />
    <Services />
    <Addition />
    <Testimonials />
    <Logos />
    <Contact />
  </Layout>
)

export default IndexPage
