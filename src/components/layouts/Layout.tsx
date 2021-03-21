/**
 * Wrapper component for all pages on the site.
 * Adds a Header, Main, and Footer.
 *
 */

import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import MenuIcon from "../icons/Menu";

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
    <div className="flex flex-col w-screen h-screen bg-gradient-to-r from-gray-100 to-red-100">
      <div className="w-screen h-screen backdrop-blur">
        <header className="flex flex-nowrap justify-between items-center h-16 p-6 overflow-hidden">
          <h1 className="text-4xl font-courier">{siteMetadata.title}</h1>
          <MenuIcon />
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
