import React from "react";
import SEO from "../components/utils/seo";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Layout from "../components/layouts/Layout";

function test() {
  return (
    <Layout>
      <SEO title="Page two" />
      <AniLink paintDrip to="/">
        <p> Hello from test page</p>
      </AniLink>
    </Layout>
  );
}

export default test;
