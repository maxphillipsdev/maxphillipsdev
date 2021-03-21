/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require(`path`);

// Create blog pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const template = path.resolve(`src/templates/Post.tsx`);

  const result = await graphql(`
    {
      allSanityPost(filter: { slug: { current: { ne: "null" } } }) {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const { edges } = result.data.allSanityPost;
  edges.forEach(edge => {
    const slug = edge.node.slug.current;
    createPage({
      path: `posts/${slug}`,
      component: template,
      context: {
        slug: slug,
      },
    });
  });
};
