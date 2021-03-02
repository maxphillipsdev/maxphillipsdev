/**
 * Wrapper component for all pages on the site.
 * Adds a Header, Main, and Footer.
 *
 */

import { graphql, useStaticQuery } from "gatsby";
import React from "react";

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
    <>
      {/* Header */}
      <header className="py-3 px-6 flex flex-wrap sm:overflow-hidden sm:justify-between">
        <a
          href="#"
          className="justify-center sm:justify-start flex flex-col overflow-visible"
        >
          <h3 className="font text-3xl py-3">🐬 {siteMetadata.title}</h3>
          <i className="italic text-sm">{siteMetadata.description}</i>
        </a>
        <nav className="py-3 justify-start sm:py-6 sm:justify-end flex flex-row overflow-auto">
          <div className="pr-3">About</div>
          <div className="pr-3">Projects</div>
          <div className="pr-3">Resume</div>
        </nav>
      </header>
      {/* Main content */}
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

export default Layout;
