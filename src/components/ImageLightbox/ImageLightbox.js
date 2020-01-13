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
      <button onClick={handleOpen} className="cursor-pointer el-full">
        <Img className="img-responsive" alt={alt} fluid={imageFluid} />
      </button>
      {isOpened && (
        <Lightbox mainSrc={imageFull} onCloseRequest={handleClose} />
      )}
    </>
  )
}

export default ImageLightbox
