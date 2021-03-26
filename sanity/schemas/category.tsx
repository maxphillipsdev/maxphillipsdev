import React from "react";

export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "icon",
      title: "Simple Icon Slug",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "icon",
    },
    prepare({ title, media }) {
      return {
        title: title,
        media: media ? (
          <img
            height={32}
            width={32}
            src={`https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/${media}.svg`}
          />
        ) : null,
      };
    },
  },
};
