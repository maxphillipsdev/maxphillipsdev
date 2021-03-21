import { graphql, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/layouts/Layout";
import SEO from "../components/utils/seo";
import BlockContent from "@sanity/block-content-to-react";
import Img from "gatsby-image";

interface Category {
  title: string;
  icon?: string;
}

const Post: React.FC<PageProps> = ({ data }) => {
  const { sanityPost } = data;
  return (
    <Layout>
      <SEO title={sanityPost.title} />
      <article className="flex flex-col flex-wrap space-y-12 justify-center items-center p-12">
        <header className="flex flex-col text-center space-y-3">
          <h1 className="text-4xl font-bold">{sanityPost.title}</h1>
          <h3 className="font-light text-xl italic">{sanityPost.subtitle}</h3>
          <span className="text-sm">Published {sanityPost.publishedAt}</span>
          <div className="flex flex-row justify-center items-center flex-wrap max-w-sm gap-1">
            {sanityPost.categories.map((category: Category) => {
              return (
                <div className="flex flex-row flex-nowrap bg-gray-50 bg-opacity-50 border-black border-opacity-30 border rounded-lg py-1 px-2 space-x-1 transition-colors">
                  {category.icon ? (
                    <img
                      height={12}
                      width={12}
                      className="rounded-sm"
                      alt={category.title}
                      src={`https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/${category.icon}.svg`}
                    />
                  ) : null}
                  <label className="text-xs">{category.title}</label>
                </div>
              );
            })}
          </div>
          <Img
            fluid={sanityPost.mainImage.asset.fluid}
            title={sanityPost.title}
            placeholderStyle={{
              filter: `blur(1.5rem)`,
            }}
            className="rounded-md shadow-xl"
          />
        </header>

        <div className="container prose md:prose-lg overflow-hidden rounded-2xl p-3">
          <BlockContent
            blocks={sanityPost._rawBody}
            // TODO: Set up serializer for using gatsby image instead of passing the below props.
            projectId="jq0d6242"
            dataset="production"
          />
        </div>

        <footer></footer>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    sanityPost(slug: { current: { eq: $slug } }) {
      title
      subtitle
      mainImage {
        asset {
          fluid(maxWidth: 1080) {
            ...GatsbySanityImageFluid
          }
        }
      }
      categories {
        title
        description
        icon
      }
      slug {
        current
      }
      publishedAt(formatString: "DD MMM YY")
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
      _rawBody
    }
  }
`;

export default Post;
