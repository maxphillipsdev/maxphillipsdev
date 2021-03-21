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
    <article className="overflow-hidden rounded-lg shadow-lg">
      <Link to={link}>
        <Img
          fluid={image}
          className="w-full"
          title={title}
          placeholderStyle={{
            filter: `blur(1.5rem)`,
          }}
        />
        <div className="p-3">
          <h3 className="text-left text-xl font-thin">{title}</h3>
          <sub className="italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </sub>
        </div>
      </Link>
    </article>
  );
};

export default PostCard;
