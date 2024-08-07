import React, { useState } from "react"
import Modal from "react-responsive-modal"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import * as styles from "./PortfolioPage.module.scss" // Make sure to import your styles
import "react-responsive-modal/styles.css"

const PortfolioPage = ({ pageContext: { node } }) => {
  // Extract image data from the node
  const images = [
    node.portfolioimage.editor,
    node.portfolioimage.port2,
    node.portfolioimage.port3,
    node.portfolioimage.port4,
    node.portfolioimage.port5,
    node.portfolioimage.port6,
    node.portfolioimage.port7,
    node.portfolioimage.port8,
    node.portfolioimage.port9,
  ]

  // State for modal
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  // Function to open the modal with the selected image
  const openModal = image => {
    setSelectedImage(image)
    setModalOpen(true)
  }

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null)
    setModalOpen(false)
  }

  return (
    <Layout>
      <div className={styles.portfolio_outer}>
        <h2>{node.title}</h2>

        <div className={styles.portfolio_img_container}>
          {images.map((image, index) => {
            if (image && image.node.localFile) {
              const imageData = getImage(image.node.localFile)
              return (
                <div
                  key={index}
                  className={styles.portfolio_img}
                  onClick={() => openModal(imageData)}
                >
                  <GatsbyImage image={imageData} alt={node.title} />
                </div>
              )
            }
            return null // Skip rendering if the image doesn't exist
          })}
        </div>

        <div dangerouslySetInnerHTML={{ __html: node.content }} />
      </div>

      {/* Modal */}
      <Modal open={modalOpen} onClose={closeModal} center>
        {selectedImage && (
          <GatsbyImage image={selectedImage} alt={node.title} />
        )}
      </Modal>
    </Layout>
  )
}

export default PortfolioPage
