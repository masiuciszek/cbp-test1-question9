import * as React from 'react';

interface Props {}

const BlogList: React.FC<any> = ({ pageContext }) => {
  console.log(pageContext);
  return (
    <div>
      {' '}
      <h1> BlogList </h1>{' '}
    </div>
  );
};

// blogList query here
export default BlogList;
