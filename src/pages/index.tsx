import Layout from "../components/layout/Layout";
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
      <div className="flex-row flex-wrap">
        {data.allSanityPost.edges.map(({ node }: any) => {
          return <PostCard name={node.title} />;
        })}
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
        }
      }
    }
  }
`;

export default IndexPage;
