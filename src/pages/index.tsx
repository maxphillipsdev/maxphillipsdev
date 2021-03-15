import Layout from "../components/layouts/Layout";
import React from "react";
import SEO from "../components/utils/seo";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { graphql, PageProps } from "gatsby";
import Img from "gatsby-image";
import { useSiteMetadata } from "../hooks/use-site-metadata";
// import TransitionLink from "gatsby-plugin-transition-link";

const HomePage: React.FC<PageProps> = ({ data }) => {
  const { splashTitle, splashSubtitle } = useSiteMetadata();

  console.log(data);

  return (
    <Layout>
      <SEO title="Welcome!" />
      <div className="h-screen max-w-sm flex px-6 items-center">
        <AniLink paintDrip to="/test">
          <h1 className="text-6xl py-3">{splashTitle}</h1>
          <span className="text-2xl font-extralight py-3">
            {splashSubtitle}
          </span>
        </AniLink>
        <Img
          fluid={data.file.childImageSharp.fluid}
          className="w-40 h-40"
          placeholderStyle={{
            filter: "blur(0.5rem)",
          }}
        />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "IMG_2337.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default HomePage;
