import * as React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

interface Props {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      siteUrl: string;
      image: string;
      author: {
        name: string;
        minibio: string;
      };
      social: {
        twitter: string;
      };
    };
  };
}

const GET_SEO_DATA = graphql`
  {
    site {
      siteMetadata {
        title
        description
        siteUrl
        image
        author {
          name
          minibio
        }
        social {
          twitter
        }
      }
    }
  }
`;

const Seo: React.FC = () => {
  // const { site } = useStaticQuery<Props>(GET_SEO_DATA);
  let a;
  return (
    <>
      <Helmet>
        <title>hello</title>
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
    </>
  );
};
export default Seo;
