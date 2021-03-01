/**
 * Wrapper component for all pages on the site.
 * Adds a Header, Main, and Footer.
 *
 */

import { graphql, useStaticQuery } from "gatsby";

import Header from "./Header";
import React from "react";

const Layout: React.FC = ({ children, data }) => {
  const { siteMetadata } = data.site;

  return (
    <>
      <Header
        siteTitle={siteMetadata?.title}
        siteDescription={siteMetadata?.description}
      />
      <div className="">
        <main className="mx-auto p-3">{children}</main>
        <footer className="mx-auto text-center p-6">
          © {new Date().getFullYear()}, Built with
          {` `}
          💖
        </footer>
      </div>
    </>
  );
};

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

export default Layout;
