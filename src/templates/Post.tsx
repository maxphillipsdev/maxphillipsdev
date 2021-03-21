import { graphql, PageProps } from "gatsby";
import React from "react";
import Layout from "../components/layouts/Layout";
import SEO from "../components/utils/seo";
import BlockContent from "@sanity/block-content-to-react";

const Post: React.FC<PageProps> = ({ data }) => {
  const { sanityPost } = data;
  return (
    <Layout>
      <SEO title={sanityPost.title} />
      <article className="flex flex-col gap-5 p-3">
        <BlockContent
          blocks={sanityPost._rawBody}
          // TODO: Set up serializer for using gatsby image instead of passing the below props.
          projectId="jq0d6242"
          dataset="production"
        />
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
          fluid(maxWidth: 700) {
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
      publishedAt(formatString: "DD.MM.YYYY")
      author {
        name
      }
      _rawBody
    }
  }
`;

export default Post;
