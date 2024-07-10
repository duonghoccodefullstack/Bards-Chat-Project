"use client";

import Markdown from 'react-markdown';
import { nanoid } from 'nanoid';
// import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
// import SyntaxHighlighter from ''
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

interface MarkdownnResponseProps {
  content: string;
}

const MarkdownnResponse: React.FC<MarkdownnResponseProps> = ({ content }) => {
  // Generate a unique id for each instance of the component
  const id = nanoid();

  return (
    <Markdown
      className="text-sm overflow-hidden leading-7"
      components={{
        code({ node, inline, className, children, ...props }) {
          const language = className?.replace(/language-/, '') || 'javascript';
          return !inline ? (
            <SyntaxHighlighter
              style={dracula}
              language={language}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...props}>{children}</code>
          );
        },
      }}
    >
      {content}
    </Markdown>
  );
}

export default MarkdownnResponse;
