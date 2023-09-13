import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "./index.module.scss"


function index({ data }) {
  const { allWpSkill } = data

  return (
    <Layout>
      <div className={styles.main_container}>
        
          {allWpSkill.edges.map(({ node }) => (
            <div className={styles.item_container}>
              <h2>{node.title}</h2>
              <div>
                {
                  <GatsbyImage
                    image={getImage(node.skillImage.skillImage.node.localFile)}
                    alt={node.title}
                  />
                }
              </div>
              <div dangerouslySetInnerHTML={{ __html: node.content }} />
            </div>
          ))}
        
      </div>
    </Layout>
  )
}

export default index

export const query = graphql`
  query MyQuery {
    allWpSkill {
      edges {
        node {
          title
          content
          skillImage {
            skillImage {
              node {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
