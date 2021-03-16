import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";

interface Props {
  text: string;
  slug: string;
}

const PageLink: React.FC<Props> = ({ text, slug }) => {
  return (
    <div className="p-3 border-gray-900 border mr-4 hover:bg-black hover:text-white transition-colors ease-in duration-100">
      <AniLink cover activeClassName="underline" to={slug}>
        {text}
      </AniLink>
    </div>
  );
};

export default PageLink;
