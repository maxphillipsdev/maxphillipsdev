import { graphql, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/layouts/Layout";
import SEO from "../components/utils/seo";

const Post: React.FC<PageProps> = ({ data }) => {
  const { sanityPost } = data;
  return (
    <Layout>
      <SEO title={sanityPost.title} />
      <div>
        <p>Written by {sanityPost.author.name}</p>
        <p>Published at {sanityPost.publishedAt}</p>
      </div>
      <article></article>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      title
      publishedAt(formatString: "DD.MM.YYYY")
      categories {
        title
      }
      author {
        name
      }
    }
  }
`;

export default Post;
