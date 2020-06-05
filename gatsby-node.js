/* eslint-disable no-shadow */
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogListTemplate = path.resolve('src/templates/blogList.tsx');
    const blogPostTemplate = path.resolve('src/templates/blogPost.tsx');

    resolve(
      graphql(
        `
          query {
            allMarkdownRemark(
              sort: { order: ASC, fields: [frontmatter___date] }
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
        `,
      ).then((result) => {
        const posts = result.data.allMarkdownRemark.edges;
        const postsPerPage = 6;
        const numPages = Math.ceil(posts.length / postsPerPage);
        posts.forEach(({ node }, index) => {
          const { path } = node.frontmatter;

          createPage({
            path: index === 0 ? '/bloglist' : `/bloglist/${index + 1}`,
            component: blogListTemplate,
            context: {
              limit: postsPerPage,
              skip: index * postsPerPage,
              numPages,
              currentPage: index + 1,
            },
          });

          createPage({
            path: `/blog${path}`,
            component: blogPostTemplate,
            context: {
              pathSlug: path,
              index,
              prev: index === 0 ? null : posts[index - 1].node,
              next: index === posts.length - 1 ? null : posts[index + 1].node,
            },
          });

          resolve();
        });
      }),
    );
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};
