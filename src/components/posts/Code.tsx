import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

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
    <SyntaxHighlighter claslanguage={language || "text"} style={}>
      {code}
    </SyntaxHighlighter>
  );
};

export default Code;
