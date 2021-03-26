import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
interface Props {
  node: any;
}

const Code: React.FC<Props> = ({ node }) => {
  if (!node || !node.code) {
    return null;
  }
  const { language, code } = node;
  return (
    // TODO: Finish code component.
    <SyntaxHighlighter
      style={atomDark}
      language={language ?? "text"}
      showLineNumbers
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default Code;
