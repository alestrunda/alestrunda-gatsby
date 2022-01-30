import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Lightbox from "react-image-lightbox"

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
  const [isLightboxOpened, setLightboxOpened] = useState(false)
  const handleLightboxBtnClick = () => {
    setLightboxOpened(true)
  }
  const handleCloseLightbox = () => {
    setLightboxOpened(false)
  }

  return (
    <>
      <div className="work-item">
        <div className="work-item__wrapper">
          <GatsbyImage
            image={image}
            className="work-item__preview"
            alt={title}
          />
          <div className="work-item__content">
            <div className="decoration-border decoration-border--top"></div>
            <div className="decoration-border decoration-border--bottom"></div>
            <h4 className="work-item__title">
              <Link to={path}>{title}</Link>
            </h4>
            <div className="work-item__inner">
              <p>
                <em>{content}</em>
              </p>
              <div className="mt10">
                {imageFull && (
                  <button
                    className="icon-box icon-box--hover tooltip mr5"
                    data-title="Full picture"
                    onClick={handleLightboxBtnClick}
                  >
                    <i className="icon-box__icon fa fa-search"></i>
                  </button>
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
                    rel={`noopener noreferrer ${urlNoFollow ? "nofollow" : ""}`}
                    target="_blank"
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
      </div>
      {isLightboxOpened && (
        <Lightbox
          mainSrc={imageFull.src}
          onCloseRequest={handleCloseLightbox}
        />
      )}
    </>
  )
}

export default Work
