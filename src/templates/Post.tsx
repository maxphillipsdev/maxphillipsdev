import React from "react";
import Layout from "../components/layout/Layout";
import SEO from "../components/utils/seo";

interface PostProps {
  location: string;
}

const Post: React.FC<PostProps> = ({ location }) => {
  return (
    <Layout>
      <SEO title={location} />
      <article>{location}</article>
    </Layout>
  );
};

export default Post;
