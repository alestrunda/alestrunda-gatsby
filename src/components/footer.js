import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <footer class="section-light page-footer">
    <div class="container">
      <p>
        Created by <Link to="/">Aleš Trunda</Link>
        All rights reserved &copy; {new Date().getFullYear()}
        <br />
        Some icons from <a href="https://www.vecteezy.com/">Vecteezy</a>
      </p>
    </div>
  </footer>
)

export default Footer
