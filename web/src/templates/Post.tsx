import { graphql, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/layouts/Layout";
import SEO from "../components/utils/seo";
import PostHeader from "../components/posts/PostHeader";
import PostBody from "../components/posts/PostBody";

const Post: React.FC<PageProps> = ({ data }) => {
  const { sanityPost } = data;
  return (
    <Layout>
      <SEO title={sanityPost.title} />
      <article className="flex flex-col flex-wrap space-y-12 justify-center items-center p-12">
        <PostHeader
          title={sanityPost.title}
          subtitle={sanityPost.subtitle}
          date={sanityPost.publishedAt}
          categories={sanityPost.categories}
          mainImage={sanityPost.mainImage.asset.fluid}
        />

        <div className="container prose md:prose-lg overflow-hidden rounded-2xl p-3">
          <PostBody
            blocks={sanityPost._rawBody}
            projectId={process.env.SANITY_PROJECT_ID}
            dataset={process.env.SANITY_DATASET}
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
