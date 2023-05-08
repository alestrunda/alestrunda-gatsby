const POSTS_PER_PAGE = 9
const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const postTemplate = path.resolve(`src/templates/post.js`)
  const workTemplate = path.resolve(`src/templates/work.js`)

  const postsQuery = graphql(`
    {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/posts/" } }
        sort: { frontmatter: { date: DESC } }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges
    const numPages = Math.ceil(posts.length / POSTS_PER_PAGE)
    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/blog` : `/blog/${index + 1}`,
        component: path.resolve("./src/templates/blog.js"),
        context: {
          limit: POSTS_PER_PAGE,
          skip: index * POSTS_PER_PAGE,
          numPages,
          currentPage: index + 1,
        },
      })
    })

    return posts.forEach(({ node }, index) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {
          prev: index === 0 ? null : posts[index - 1].node,
          next: index === posts.length - 1 ? null : posts[index + 1].node,
        },
      })
    })
  })

  const worksQuery = graphql(`
    {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/works/" }
          frontmatter: { published: { eq: "true" } }
        }
        sort: { frontmatter: { date: DESC } }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              title
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const works = result.data.allMarkdownRemark.edges
    return works.forEach(({ node }, index) => {
      createPage({
        path: node.frontmatter.path,
        component: workTemplate,
        context: {
          prev: index === 0 ? null : works[index - 1].node,
          next: index === works.length - 1 ? null : works[index + 1].node,
        },
      })
    })
  })

  return Promise.all([postsQuery, worksQuery])
}
