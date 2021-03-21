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
        <div className="p-3 space-y-3">
          <div className="flex flex-row flex-wrap justify-between">
            <h1 className="text-left text-xl font-thin justify-start">
              {title}
            </h1>
          </div>
          <sub className="italic">{subtitle}</sub>
          <div className="categories flex flex-row flex-wrap gap-1">
            {categories.map(category => {
              return (
                <div className="flex flex-row flex-nowrap bg-gray-50 bg-opacity-50 border-black border-opacity-30 border rounded-lg py-1 px-2 space-x-1 transition-colors">
                  <img
                    height={12}
                    width={12}
                    className="rounded-sm"
                    alt={category.title}
                    src={`https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/${category.icon}.svg`}
                  />
                  <label className="text-xs">{category.title}</label>
                </div>
              );
            })}
          </div>
        </div>
      </Link>
    </article>
  );
};

export default PostCard;
