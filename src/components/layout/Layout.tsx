import "@fontsource/inter";

import React, { ReactNode } from "react";
/**
 * Wrapper component for all pages on the site.
 * Adds a Header, Main, and Footer.
 *
 */
import { graphql, useStaticQuery } from "gatsby";

import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const { siteMetadata } = site;

  return (
    <>
      <Header siteTitle={siteMetadata?.title || `Test site`} />
      <div>
        <main className="container mx-auto p-3">{children}</main>
        <footer className="container mx-auto text-center bg-gray-100 rounded-lg shadow-lg max-w">
          © {new Date().getFullYear()}, Built with
          {` `}
          💖
        </footer>
      </div>
    </>
  );
};

export default Layout;
