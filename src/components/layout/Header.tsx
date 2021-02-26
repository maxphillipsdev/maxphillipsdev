import React from "react";

interface HeaderProps {
  siteTitle?: string;
  siteDescription?: string;
}

const Header = (props: HeaderProps) => {
  return (
    <header className="p-6 sm:flex overflow-hidden justify-between">
      <a href="#" className="justify-start flex flex-col overflow-visible">
        <h3 className="font text-3xl py-3">🐬 {props.siteTitle}</h3>
        <i className="italic text-sm">{props.siteDescription}</i>
      </a>
      <nav className="py-3 justify-start sm:py-6 sm:justify-end flex flex-row overflow-auto">
        <div className="pr-3">About</div>
        <div className="pr-3">Projects</div>
        <div className="pr-3">Resume</div>
      </nav>
    </header>
  );
};

export default Header;
