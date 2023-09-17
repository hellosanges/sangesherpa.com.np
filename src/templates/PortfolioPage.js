// src/templates/PortfolioPage.js

import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"

const PortfolioPage = ({ pageContext: { node } }) => {
  return (
    <Layout>
      <div>
        <p>This is a heading</p>
        <h1>{node.uri}</h1>
        
      </div>
    </Layout>
  )
}

export default PortfolioPage
