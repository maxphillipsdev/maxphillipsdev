import Layout from "../components/layout/Layout";
import { Link } from "gatsby";
import React from "react";
import SEO from "../components/utils/seo";

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="Welcome!" />
      <div className=""></div>
    </Layout>
  );
};

export default IndexPage;
