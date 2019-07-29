import React, { useState } from "react"
import Img from "gatsby-image"
import Lightbox from "react-image-lightbox"

const ImageLightbox = ({ alt, imageFluid, imageFull }) => {
  const [isOpened, setOpened] = useState(false)
  const handleOpen = () => {
    setOpened(true)
  }
  const handleClose = () => {
    setOpened(false)
  }

  return (
    <>
      <div onClick={handleOpen} className="cursor-pointer">
        <Img className="img-responsive" alt={alt} fluid={imageFluid} />
      </div>
      {isOpened && (
        <Lightbox mainSrc={imageFull} onCloseRequest={handleClose} />
      )}
    </>
  )
}

export default ImageLightbox
