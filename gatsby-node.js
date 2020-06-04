const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blogPost.js');

    resolve(
      graphql(
        `
          query {
            allMarkdownRemark {
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
        result.data.allMarkdownRemark.edges.forEach(({ node }, index) => {
          const { path } = node.frontmatter;
          const amountOfPosts = result.data.allMarkdownRemark.length;
          const currentIndex = index;
          createPage({
            path,
            component: blogPostTemplate,
            context: {
              pathSlug: path,
              index,
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
