import Layout from "../components/layouts/Layout";
import React from "react";
import SEO from "../components/utils/seo";
import { graphql, PageProps } from "gatsby";
import PostCard from "../components/cards/PostCard";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const HomePage: React.FC<PageProps> = ({ data }) => {
  const { allSanityPost } = data;

  const { splashSubtitle, splashTitle } = useSiteMetadata();

  return (
    <Layout>
      <SEO title="Welcome!" />
      <section className="h-screen w-screen flex flex-col items-center text-center sm:text-left sm:items-start justify-evenly p-3">
        <div>
          <h1 className="text-4xl">{splashTitle}</h1>
          <h3 className="text-2xl">{splashSubtitle}</h3>
        </div>
        <span className="justify-self-end place-self-center font-bold text-xl animate-bounce rounded-full border-2 border-r-2 border-black">
          ↓
        </span>
      </section>
      <section className="p-3 space-y-3">
        <h1 className="text-4xl font-light">Some things I've written...</h1>
        <div className="grid grid-cols-1 grid-flow-row gap-4 flex-wrap sm:max-w-md sm:min-w-full sm:grid-cols-3">
          {allSanityPost.nodes.map((node: any) => {
            return (
              <PostCard
                title={node.title}
                subtitle={node.subtitle}
                key={node.slug.current}
                image={node.mainImage.asset.fluid}
                slug={node.slug.current}
                categories={node.categories}
                author={node.author}
                date={node.publishedAt}
              />
            );
          })}
        </div>
      </section>
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
        author {
          name
          image {
            asset {
              fluid(maxWidth: 700) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
        publishedAt(formatString: "DD MMM YY")
      }
    }
  }
`;

export default HomePage;
