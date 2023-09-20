exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query MyQuery {
      allWpPortfolio {
        edges {
          node {
            title
            content
            uri
            portfolioimage {
              editor {
                node {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
              port2 {
                node {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
              port3 {
                node {
                  localFile {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
              }
              port4 {
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
  `)

  const { allWpPortfolio } = result.data
  // Define the template to use

  allWpPortfolio.edges.map(({ node }) => {
    actions.createPage({
      path: node.uri,
      component: require.resolve(`./src/templates/PortfolioPage.js`),
      context: { node },
    })
  })
}
