import React from "react";

interface HeaderProps {
  siteTitle?: string;
}

const Header = ({ siteTitle = "Untitled Site" }: HeaderProps) => {
  return (
    <header className="bg-blue-300 p-6">
      <h3>{siteTitle}</h3>
    </header>
  );
};

export default Header;
