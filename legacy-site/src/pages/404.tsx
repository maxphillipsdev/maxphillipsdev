import React from "react";
import Layout from "../components/layouts/Layout";

const PageNotFound: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col justify-start items-center text-center p-6">
        <h4 className="text-2xl">Page not found 😢!</h4>
        <p className="text-lg">
          Maybe try checking the homepage to see the latest posts?
        </p>
      </div>
    </Layout>
  );
};

export default PageNotFound;
