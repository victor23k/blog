import { FunctionComponent } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const getLanguage = (className: string | undefined) => {
  const match = /language-(\w*)/.exec(className ? className : 'javascript');
  let lang = 'javascript';
  if (match && match.length > 1) {
    lang = match[1];
  }
  return lang;
};

interface CodeBlock {
  children: string;
  className: string;
}

const Code: FunctionComponent<CodeBlock> = ({ children, className }) => {
  if (className) {
    const language = getLanguage(className);
    return (
      <SyntaxHighlighter language={language} style={darcula} wrapLongLines>
        {children}
      </SyntaxHighlighter>
    );
  } else {
    return <code>{children}</code>;
  }
};

export default Code;
