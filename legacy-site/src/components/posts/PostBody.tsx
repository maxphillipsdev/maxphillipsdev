import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import Code from "./Code";

interface Props {
  blocks: any;
  projectId?: string;
  dataset?: string;
}

const serializers = {
  types: {
    code: Code,
  },
};

const PostBody: React.FC<Props> = ({ blocks, projectId, dataset }) => {
  console.log(projectId, dataset);
  return (
    <BlockContent
      blocks={blocks}
      serializers={serializers}
      projectId={projectId}
      dataset={dataset}
    />
  );
};

export default PostBody;
