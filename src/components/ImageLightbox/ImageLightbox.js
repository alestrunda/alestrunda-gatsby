import React, { useState } from "react"
import { GatsbyImage } from "gatsby-plugin-image"
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
        <GatsbyImage image={imageFluid} className="img-responsive" alt={alt} />
      </button>
      {isOpened && (
        <Lightbox mainSrc={imageFull} onCloseRequest={handleClose} />
      )}
    </>
  )
}

export default ImageLightbox
