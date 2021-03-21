/**
 * Wrapper component for all pages on the site.
 * Adds a Header, Main, and Footer.
 *
 */

import { graphql, Link, useStaticQuery } from "gatsby";
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
    <div className="bg-gradient-to-r from-gray-100 to-red-100 min-w-screen min-h-screen">
      <div className="flex flex-col backdrop-blur">
        <header className="flex flex-nowrap justify-between items-center h-16 p-6 overflow-hidden">
          <Link to="/">
            <h1 className="text-4xl font-courier hover:underline">
              {siteMetadata.title}
            </h1>
          </Link>
          <MenuIcon />
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
