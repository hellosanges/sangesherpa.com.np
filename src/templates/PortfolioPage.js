import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"

const PortfolioPage = ({ pageContext: { node } }) => {
  // Extract image data from the node
   const images = [
     node.portfolioimage.editor,
     node.portfolioimage.port2,
     node.portfolioimage.port3,
     node.portfolioimage.port4,
     node.portfolioimage.port5,
   ]
  return (
    <Layout>
      <div>
        <p>This is a heading</p>
        <h1>{node.uri}</h1>
        <div>
          {images.map((image, index) => {
            if (image && image.node.localFile) {
              const imageData = getImage(image.node.localFile)
              return (
                <div key={index}>
                  <GatsbyImage
                    image={imageData}
                    alt={`${node.title} - Image ${index + 1}`}
                  />
                </div>
              )
            }
            return null // Skip rendering if the image doesn't exist
          })}
        </div>
      </div>
    </Layout>
  )
}

export default PortfolioPage
