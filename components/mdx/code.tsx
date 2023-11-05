import { FunctionComponent } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { gruvboxDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

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
  const copyCode = async () => {
    const blob = new Blob([children], {type: "text/plain"});
    const data = [new ClipboardItem({ [blob.type]: blob})];

    await navigator.clipboard.write(data);
  }

  if (className) {
    const language = getLanguage(className);
    return (
    <div className='codeBlock'> 
      <p>
        <span>{language}</span>
        <button onClick={copyCode}>copy</button>
      </p>
      <SyntaxHighlighter language={language} style={gruvboxDark} wrapLongLines>
        {children}
      </SyntaxHighlighter>
      </div>
    );
  } else {
    return <code>{children}</code>;
  }
};

export default Code;
