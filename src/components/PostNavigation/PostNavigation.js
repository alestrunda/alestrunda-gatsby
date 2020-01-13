import React from "react"
import { Link } from "gatsby"

const PostNavigation = ({ next, prev }) => {
  if (!next && !prev) return null

  return (
    <div className="grid grid--small mb20">
      <div className="grid__item grid__item--xs-span-6">
        {prev && (
          <Link className="link-box link-box--small" to={prev.frontmatter.path}>
            <i className="fa fa-chevron-left mr10"></i>
            {prev.frontmatter.title}
          </Link>
        )}
      </div>
      <div className="grid__item grid__item--xs-span-6 text-right">
        {next && (
          <Link className="link-box link-box--small" to={next.frontmatter.path}>
            {next.frontmatter.title}
            <i className="fa fa-chevron-right ml10"></i>
          </Link>
        )}
      </div>
    </div>
  )
}

export default PostNavigation
