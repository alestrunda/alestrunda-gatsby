import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Work = ({
  content,
  image,
  imageFull,
  path,
  title,
  urlGithub,
  urlList,
  urlLive,
  urlNoFollow,
}) => {
  return (
    <div className="work-item">
      <div className="work-item__wrapper">
        <Img fluid={image} className="work-item__preview" />
        <div className="work-item__content">
          <div className="decoration-border decoration-border--top"></div>
          <div className="decoration-border decoration-border--bottom"></div>
          <h4 className="work-item__title">{title}</h4>
          <p>
            <em>{content}</em>
          </p>
          <div className="mt10">
            {imageFull && (
              <a
                className="icon-box icon-box--hover tooltip mr5"
                href={imageFull.src}
                data-title="Full picture"
              >
                <i className="icon-box__icon fa fa-search"></i>
              </a>
            )}
            {urlList && (
              <a
                className="icon-box icon-box--hover tooltip mr5"
                href={urlList}
                data-title="List of all pages"
                rel="nofollow"
              >
                <i className="icon-box__icon fas fa-file-alt"></i>
              </a>
            )}
            {urlLive && (
              <a
                className="icon-box icon-box--hover tooltip mr5"
                href={urlLive}
                data-title="Live preview"
                rel={urlNoFollow ? "nofollow" : ""}
              >
                <i className="icon-box__icon fa fa-share"></i>
              </a>
            )}
            {urlGithub && (
              <a
                className="icon-box icon-box--hover tooltip mr5"
                href={urlGithub}
                data-title="Github"
              >
                <i className="icon-box__icon fab fa-github"></i>
              </a>
            )}
            {path && (
              <Link
                className="icon-box icon-box--hover tooltip mr5"
                to={path}
                data-title="Details"
              >
                <i className="icon-box__icon fa fa-info"></i>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
