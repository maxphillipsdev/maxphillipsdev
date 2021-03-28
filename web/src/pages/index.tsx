import Layout from "../components/layouts/Layout";
import React from "react";
import SEO from "../components/utils/seo";
import { graphql, PageProps } from "gatsby";
import PostCard from "../components/cards/PostCard";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import Img from "gatsby-image";

const HomePage: React.FC<PageProps> = ({ data }) => {
  const { allSanityPost, sanityAuthor } = data;

  const { splashSubtitle, splashTitle } = useSiteMetadata();

  return (
    <Layout>
      <SEO title="Welcome!" />
      <section
        data-sal="slide-down"
        data-sal-delay="300"
        data-sal-easing="ease"
        className="flex flex-col justify-evenly items-center gap-4 pt-6"
      >
        <Img
          fluid={sanityAuthor.image.asset.fluid}
          className="w-64 h-64 shadow-2xl rounded-full"
          title={sanityAuthor.name}
          placeholderStyle={{
            filter: `blur(1.5rem)`,
          }}
        />
        <div className="p-3 text-center">
          <h1 className="text-4xl">{splashTitle}</h1>
          <h3 className="text-2xl">{splashSubtitle}</h3>
        </div>
      </section>
      <section className="p-6 space-y-2">
        <h1 className="text-2xl font-light">Some things I've written...</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-flow-row flex-wrap gap-4 mx-auto">
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
    sanityAuthor {
      name
      image {
        asset {
          fluid(maxWidth: 500) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
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
              fluid(maxWidth: 100) {
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
