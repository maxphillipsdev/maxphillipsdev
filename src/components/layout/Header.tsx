import React from "react";

interface HeaderProps {
  siteTitle?: string;
  siteDescription?: string;
}

const Header = (props: HeaderProps) => {
  return (
    <header className="p-6 flex flex-row overflow-hidden justify-between">
      <a href="#" className="justify-start flex flex-col overflow-visible">
        <h3 className="font text-3xl p-1">🐬 {props.siteTitle}</h3>
        <i className="italic text-sm p-1">{props.siteDescription}</i>
      </a>
      <nav className="justify-end flex flex-row overflow-auto">
        <div className="p-3 hover:underline">About</div>
        <div className="p-3">Projects</div>
        <div className="p-3">Resume</div>
      </nav>
    </header>
  );
};

export default Header;
