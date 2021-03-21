import Layout from "../components/layouts/Layout";
import React from "react";
import SEO from "../components/utils/seo";
import { graphql, PageProps } from "gatsby";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import PostCard from "../components/cards/PostCard";

const HomePage: React.FC<PageProps> = ({ data }) => {
  const { allSanityPost } = data;

  return (
    <Layout>
      <SEO title="Welcome!" />
      <div className="grid grid-cols-1 grid-flow-row gap-4 flex-wrap p-3">
        {allSanityPost.nodes.map((node: any) => {
          return (
            <PostCard
              title={node.title}
              key={node.slug.current}
              image={node.mainImage.asset.fluid}
              link={node.slug.current}
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
