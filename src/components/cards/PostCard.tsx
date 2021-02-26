import React from "react";

interface PostCardProps {
  name: string;
  description?: string;
}

const PostCard: React.FC<PostCardProps> = ({ name, description }) => {
  return (
    <div className="container m-3 p-3 max-w-sm bg-blue-100 rounded-lg shadow-md overflow-hidden">
      <h3 className="text-lg">{name}</h3>
      <sub>Lorem ipsum dolor sit amet.</sub>
    </div>
  );
};

export default PostCard;
