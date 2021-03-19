import Layout from "../components/layouts/Layout";
import React from "react";
import SEO from "../components/utils/seo";
import { PageProps } from "gatsby";
import { useSiteMetadata } from "../hooks/use-site-metadata";

const HomePage: React.FC<PageProps> = () => {
  const { splashTitle, splashSubtitle } = useSiteMetadata();

  return (
    <Layout>
      <SEO title="Welcome!" />
      <div className="flex justify-center items-center">
        <div className="max-w-sm p-6">
          <h1 className="text-2xl py-3 transform-gpu hover:scale-150 transition-transform duration-1000">
            {splashTitle}
          </h1>
          <span className="text-xl font-extralight py-3">{splashSubtitle}</span>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
