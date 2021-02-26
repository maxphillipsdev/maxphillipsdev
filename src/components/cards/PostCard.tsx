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
    <article className="container max-w-sm bg-blue-100 rounded-lg shadow-md overflow-hidden transition-all hover:scale-125">
      <Link to={link}>
        <Img fluid={image} className="w-full" title={title} />
        <div className="p-3">
          <h3 className="text-left text-3xl font-bold">{title}</h3>
          <sub className="italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            ratione sunt ut, amet quia non! Accusantium explicabo sint quas
            voluptates vitae. Repudiandae, doloremque nihil sint iste minima
            fuga non, unde tempora repellat sed rem veritatis aliquid reiciendis
            ex enim.
          </sub>
        </div>
      </Link>
    </article>
  );
};

export default PostCard;
