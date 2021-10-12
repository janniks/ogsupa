import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import a11yDark from 'lib/a11yDark';
import toast from 'react-hot-toast';

const CodeBlock = ({ code, className, copy = true }) => {
  return (
    <div className={`relative ${className}`}>
      <SyntaxHighlighter
        language="xml"
        style={a11yDark}
        customStyle={{ padding: '26px' }}
      >
        {code}
      </SyntaxHighlighter>
      {copy && (
        <span className="absolute top-1 right-1">
          <button
            onClick={() => {
              navigator.clipboard.writeText(code);
              toast.success('Copied to clipboard');
            }}
            className="font-medium text-sm px-1 py-0.5 text-md leading-4 rounded-md"
            style={{ backgroundColor: '#f3b0a0' }}
          >
            Copy
          </button>
        </span>
      )}
    </div>
  );
};

export default CodeBlock;
