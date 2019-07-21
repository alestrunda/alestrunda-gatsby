const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve(`src/templates/post.js`)
  const workTemplate = path.resolve(`src/templates/work.js`)

  const posts = graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/posts/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })

  const works = graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/works/" } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: workTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })

  return Promise.all([posts, works])
}
