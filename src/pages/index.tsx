import Layout from "../components/layouts/Layout";
import { graphql, PageProps, useStaticQuery } from "gatsby";
import React from "react";
import SEO from "../components/utils/seo";
import AniLink from "gatsby-plugin-transition-link/AniLink";
// import TransitionLink from "gatsby-plugin-transition-link";

interface Props extends PageProps {}

const IndexPage: React.FC<PageProps> = () => {
  const { site } = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          splashSubtitle
          splashTitle
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="Welcome!" />
      <div className="h-screen max-w-sm flex px-6 items-center">
        <AniLink paintDrip to="/test">
          <h1 className="text-6xl py-3">{site.siteMetadata.splashTitle}</h1>
          <span className="text-2xl font-extralight py-3">
            {site.siteMetadata.splashSubtitle}
          </span>
        </AniLink>
      </div>
    </Layout>
  );
};

export default IndexPage;
