import Layout from "../components/layouts/Layout";
import { graphql, Link } from "gatsby";
import React from "react";
import SEO from "../components/utils/seo";
import PostCard from "../components/cards/PostCard";

interface IndexPageProps {
  data: any;
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
  return (
    <Layout>
      <SEO title="Welcome!" />
      <div className="h-screen max-w-sm flex px-6 items-center">
        <h1 className="text-6xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </h1>
      </div>
    </Layout>
  );
};

export const getAllPostsQuery = graphql`
  query getAllPosts {
    allSanityPost(limit: 10) {
      edges {
        node {
          title
          slug {
            current
          }
          mainImage {
            asset {
              fluid(maxWidth: 700) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
