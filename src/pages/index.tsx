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
      <div className="flex flex-col p-3">
        <section id="blog-posts" className="rounded-lg shadow-xl bg-gray-300">
          <h1 className="text-xl italic p-3">Recent posts</h1>
          <div className="cards flex flex-row p-3 overflow-hidden overflow-x-scroll">
            {data.allSanityPost.edges.map(({ node }: any) => {
              return (
                <>
                  <PostCard
                    link={`posts/${node.slug.current}`}
                    title={node.title}
                    image={node.mainImage.asset.fluid}
                  />
                  <PostCard
                    link={`posts/${node.slug.current}`}
                    title={node.title}
                    image={node.mainImage.asset.fluid}
                  />
                  <PostCard
                    link={`posts/${node.slug.current}`}
                    title={node.title}
                    image={node.mainImage.asset.fluid}
                  />
                </>
              );
            })}
          </div>
        </section>
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
