import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const ArticlePreview = ({ author, date, excerpt, image, title, url }) => (
  <div className="post-article">
    <Link className="post-article__img-wrapper" to={url}>
      <Img
        fluid={image}
        className="post-article__img img-responsive"
        alt={title}
      />
      <div className="post-article__img-overlay">
        <div className="decoration-border decoration-border--top"></div>
        <div className="decoration-border decoration-border--bottom"></div>
        <h4 className="post-article__img-title m0 text-yellow text-uppercase">
          {title}
        </h4>
      </div>
    </Link>
    <h2 className="post-article__title">
      <Link className="link-clean" to={url}>
        {title}
      </Link>
    </h2>
    <ul className="list-tags">
      <li className="list-tags__item">
        <i className="list-tags__icon fa fa-pencil-alt"></i> {author}
      </li>
      <li className="list-tags__item">
        <i className="list-tags__icon far fa-clock"></i> {date}
      </li>
    </ul>
    {excerpt}
    <p className="text-right">
      <Link className="link-read-more" to={url}>
        Read more
        <i className="fas fa-angle-double-right link-read-more__icon"></i>
      </Link>
    </p>
  </div>
)

export default ArticlePreview
