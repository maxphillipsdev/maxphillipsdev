import Layout from "../components/layout/Layout";
import { Link } from "gatsby";
import React from "react";
import SEO from "../components/utils/seo";

const IndexPage: React.FC = () => {
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/5")
      .then(response => response.json())
      .then(json => {
        setText(json.title);
      });
  });

  return (
    <Layout>
      <SEO title="Welcome!" />
      <div className="max-w-sm mx-auto flex p-6 bg-gray-50 rounded-lg shadow-xl">
        <Link to="/test" className="text-lg">
          Test Link
        </Link>
        <br />
        <p className="text-base">{text}</p>
      </div>
    </Layout>
  );
};

export default IndexPage;
