exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query MyQuery {
      allWpPortfolio {
        edges {
          node {
            title
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
            }
            technologies {
              nodes {
                name
              }
            }
            portfolioTypes {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.error("There was an error fetching posts", result.errors)
  }
  const { allWpPortfolio } = result.data
  // Define the template to use

  allWpPortfolio.edges.map(({ node }) => {
    actions.createPage({
      path: `${node.uri}`,
      component: require.resolve(`./src/templates/PortfolioPage.js`),
      context: { node },
    })
  })
}
