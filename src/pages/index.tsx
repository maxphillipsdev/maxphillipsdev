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
      <h1 className="text-4xl italic p-3">Recent posts</h1>
      <section id="blog-posts" className="flex flex-row p-3">
        {data.allSanityPost.edges.map(({ node }: any) => {
          return (
            <PostCard
              link={node.slug.current}
              title={node.title}
              image={node.mainImage.asset.fluid}
            />
          );
        })}
      </section>
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
              fluid(maxWidth: 500) {
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
