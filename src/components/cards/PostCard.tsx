import React from "react";
import Img, { FluidObject } from "gatsby-image";
import { Link } from "gatsby";

interface PostCardProps {
  title: string;
  description?: string;
  image: FluidObject;
  link: string;
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  description,
  image,
  link,
}) => {
  return (
    <article className="m-3 container min-w-max max-w-xs max-h-xs bg-gray-100 rounded-xl shadow-xl overflow-hidden transition-all">
      <Link to={link}>
        <Img fluid={image} className="w-full" title={title} />
        <div className="p-3">
          <h3 className="text-left text-3xl font-bold">{title}</h3>
          <sub className="italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </sub>
        </div>
      </Link>
    </article>
  );
};

export default PostCard;
