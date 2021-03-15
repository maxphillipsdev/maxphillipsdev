/**
 * Wrapper component for all pages on the site.
 * Adds a Header, Main, and Footer.
 *
 */

import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

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
      <header className="py-6 px-6 flex flex-wrap justify-start sm:flex-nowrap sm:overflow-hidden sm:justify-between">
        <AniLink
          paintDrip
          to="/"
          className="justify-center sm:justify-start flex flex-col overflow-visible"
        >
          <h3 className="font text-3xl hover:underline mb-3">
            {siteMetadata.title}
          </h3>
          {/* <i className="italic text-sm">{siteMetadata.description}</i> */}
        </AniLink>
        <nav className="justify-start sm:justify-end flex flex-row overflow-auto">
          <AniLink
            swipe
            direction="down"
            to="/about"
            className="p-3 border-gray-900 border mr-4 hover:bg-black hover:text-white transition-colors ease-in duration-100"
          >
            About
          </AniLink>
          <AniLink
            swipe
            direction="down"
            to="/projects"
            className="p-3 border-gray-900 border mr-4 hover:bg-black hover:text-white transition-colors ease-in duration-100"
          >
            Projects
          </AniLink>
          <AniLink
            swipe
            direction="down"
            to="/resume"
            className="p-3 border-gray-900 border mr-4 hover:bg-black hover:text-white transition-colors ease-in duration-100"
          >
            Resume
          </AniLink>
          <AniLink
            swipe
            direction="down"
            to="/contact"
            className="p-3 border-gray-900 border mr-4 hover:bg-black hover:text-white transition-colors ease-in duration-100"
          >
            Contact
          </AniLink>
        </nav>
      </header>
      {/* Main content */}
      <div className="">
        <main className="mx-auto">{children}</main>
        {/* <footer className="mx-auto text-center p-6">
          © {new Date().getFullYear()}, Built with
          {` `}
          💖
        </footer> */}
      </div>
    </>
  );
};

export default Layout;
