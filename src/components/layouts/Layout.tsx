/**
 * Wrapper component for all pages on the site.
 * Adds a Header, Main, and Footer.
 *
 */

import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import PageLink from "./PageLink";

const Layout: React.FC = ({ children }) => {
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
    <div className="w-screen h-screen flex-col">
      {/* Header */}
      <header className="py-6 px-6 flex flex-wrap justify-start sm:flex-nowrap sm:overflow-hidden sm:justify-between">
        <Link
          to="/"
          className="justify-center sm:justify-start flex flex-col overflow-visible"
        >
          <h3 className="font text-3xl hover:underline mb-3">
            {siteMetadata.title}
          </h3>
          {/* <i className="italic text-sm">{siteMetadata.description}</i> */}
        </Link>
        <nav className="justify-start sm:justify-end flex flex-row overflow-auto">
          <PageLink text="Blog" slug="/blog" />
          <PageLink text="About" slug="/about" />
          <PageLink text="Contact" slug="/contact" />
        </nav>
      </header>
      {/* Main content */}
      <main className="flex-grow bg-red-500">{children}</main>
      <footer className="mx-auto text-center p-6">
        © {new Date().getFullYear()}, Built with
        {` `}
        💖
      </footer>
    </div>
  );
};

export default Layout;
