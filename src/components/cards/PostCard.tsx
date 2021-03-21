import React from "react";
import Img, { FluidObject } from "gatsby-image";
import { Link } from "gatsby";
import { string } from "prop-types";
import category from "../../../sanity/schemas/category";

interface Category {
  title: string;
  icon?: string;
}

interface PostCardProps {
  title: string;
  subtitle?: string;
  image: FluidObject;
  slug: string;
  categories: Category[];
}

const PostCard: React.FC<PostCardProps> = ({
  title,
  subtitle,
  image,
  slug,
  categories,
}) => {
  return (
    <article className="overflow-hidden rounded-lg shadow-lg bg-gray-50 bg-opacity-30 hover:bg-opacity-80 backdrop-blur transform hover:scale-105 transition-transform">
      <Link to={`posts/${slug}`}>
        <Img
          fluid={image}
          className="w-full"
          title={title}
          placeholderStyle={{
            filter: `blur(1.5rem)`,
          }}
        />
        <div className="p-3">
          <div className="flex flex-row flex-wrap justify-between pr-1">
            <h1 className="text-left text-xl font-thin justify-start">
              {title}
            </h1>
            <div className="categories justify-end"></div>
            {categories.map(category => {
              return (
                <img
                  height={32}
                  width={32}
                  className="rounded-sm shadow-sm"
                  alt={category.title}
                  src={`https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/${category.icon}.svg`}
                />
              );
            })}
          </div>
          <sub className="italic">{subtitle}</sub>
        </div>
      </Link>
    </article>
  );
};

export default PostCard;
