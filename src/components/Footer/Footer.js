import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <footer className="section-light page-footer">
    <div className="container paragraphs-clean">
      <p>
        Created by <Link to="/">Aleš Trunda</Link>. All rights reserved &copy;{" "}
        {new Date().getFullYear()}
      </p>
    </div>
  </footer>
)

export default Footer
