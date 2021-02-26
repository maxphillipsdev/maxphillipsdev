/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   const result = await graphql(`
//     {
//       allSanityPost(filter: { slug: { current: { ne: "null" } } }) {
//         edges {
//           node {
//             title
//             publishedAt(formatString: "DD.MM.YYYY")
//             slug {
//               current
//             }
//             mainImage {
//               asset {
//                 url
//               }
//             }
//           }
//         }
//       }
//     }
//   `);

//   if (result.errors) {
//     throw result.errors;
//   }

//   const posts = result.data.allSanityPosts.edges || [];
//   posts.forEach((edge, index) => {
//     const path = `/blog/${edge.node.slug.current}`;

//     createPage({
//       path,
//       component: require.resolve("./src/templates/post.tsx"),
//       context: { slug: edge.node.slug.current },
//     });
//   });
// };
