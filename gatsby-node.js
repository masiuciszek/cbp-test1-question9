/* eslint-disable no-shadow */
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

/**
 *
 * @param {Function} createPage
 * @param {Array} posts
 */
const createTagPages = (createPage, posts) => {
  const allTagIndexTemplate = path.resolve('src/templates/allTags.tsx');
  const singleTagIndexTemplate = path.resolve('src/templates/singleTag.tsx');

  const postsByTag = {};

  posts.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach((tag) => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = [];
        }

        postsByTag[tag].push(node);
      });
    }
  });

  const tags = Object.keys(postsByTag);
  createPage({
    path: '/tags',
    component: allTagIndexTemplate,
    context: {
      tags: tags.sort(),
    },
  });
};

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
                    title
                    tags
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
        createTagPages(createPage, posts);

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
