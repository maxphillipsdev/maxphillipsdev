/**
 * Wrapper component for all pages on the site.
 * Adds a Header, Main, and Footer.
 *
 */
import { graphql, useStaticQuery } from "gatsby";
import React, { ReactNode } from "react";
import Header from "./Header";

import "@fontsource/inter";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
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
