import { Link } from "gatsby";
import React from "react";

interface Props {
  text: string;
  slug: string;
}

const PageLink: React.FC<Props> = ({ text, slug }) => {
  return (
    <div className="p-3 border-gray-900 border mr-4 hover:bg-black hover:text-white transition-colors ease-in duration-100">
      <Link activeClassName="underline" to={slug}>
        {text}
      </Link>
    </div>
  );
};

export default PageLink;
