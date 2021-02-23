import React from "react";
import Layout from "../components/layout/Layout";
import SEO from "../components/utils/seo";

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Welcome!" />
    <div className="max-w-sm mx-auto flex p-6 bg-gray-50 rounded-lg shadow-xl">
      <p className="text-base">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        amet repudiandae, officiis vero nesciunt aspernatur ex, architecto nisi
        est et deserunt commodi cupiditate debitis eligendi impedit
        reprehenderit accusamus ut enim. 💖💖💖
      </p>
    </div>
  </Layout>
);

export default IndexPage;
