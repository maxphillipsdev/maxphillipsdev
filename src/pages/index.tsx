import Layout from "../components/layouts/Layout";
import React from "react";
import SEO from "../components/utils/seo";
import { graphql, PageProps } from "gatsby";
import PostCard from "../components/cards/PostCard";

const HomePage: React.FC<PageProps> = ({ data }) => {
  const { allSanityPost } = data;

  return (
    <Layout>
      <SEO title="Welcome!" />
      <div className="grid grid-cols-1 grid-flow-row gap-4 flex-wrap p-3 sm:max-w-md sm:min-w-full sm:grid-cols-3">
        {allSanityPost.nodes.map((node: any) => {
          return (
            <PostCard
              title={node.title}
              subtitle={node.subtitle}
              key={node.slug.current}
              image={node.mainImage.asset.fluid}
              slug={node.slug.current}
              categories={node.categories}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allSanityPost(limit: 10) {
      nodes {
        title
        subtitle
        categories {
          title
          icon
        }
        mainImage {
          asset {
            fluid(maxWidth: 700) {
              ...GatsbySanityImageFluid
            }
          }
        }
        slug {
          current
        }
      }
    }
  }
`;

export default HomePage;
