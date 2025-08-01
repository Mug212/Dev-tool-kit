import React from 'react';

const basicButtonCode = `import React from 'react';\n\ninterface ButtonProps {\n  children: React.ReactNode;\n  onClick?: () => void;\n  className?: string;\n}\n\nconst Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {\n  return (\n    <button\n      className={\`px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 \${className || \'\'}\`}\n      onClick={onClick}\n    >\n      {children}\n    </button>\n  );\n};\n\nexport default Button;`;

const darkModeCode = `// useDarkMode.ts\nimport { useState, useEffect } from 'react';\n\nexport const useDarkMode = () => {\n  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {\n    const savedMode = localStorage.getItem('darkMode');\n    return savedMode === 'true' || (savedMode === null && window.matchMedia('(prefers-color-scheme: dark)').matches);\n  });\n\n  useEffect(() => {\n    document.documentElement.classList.toggle('dark', isDarkMode);\n    localStorage.setItem('darkMode', String(isDarkMode));\n  }, [isDarkMode]);\n\n  const toggleDarkMode = () => setIsDarkMode(prevMode => !prevMode);\n\n  return [isDarkMode, toggleDarkMode] as const;\n};\n\n// DarkModeToggle.tsx\nimport React from 'react';\nimport { useDarkMode } from './useDarkMode';\n\nconst DarkModeToggle: React.FC = () => {\n  const [isDarkMode, toggleDarkMode] = useDarkMode();\n\n  return (\n    <button\n      onClick={toggleDarkMode}\n      className=\"px-4 py-2 rounded-md bg-gray-800 text-white dark:bg-gray-200 dark:text-gray-800\"\n    >\n      {isDarkMode ? 'Light Mode' : 'Dark Mode'}\n    </button>\n  );\n};\n\nexport default DarkModeToggle;`;

const CodeSnippets = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-8">Code Snippets</h1>
      <p className="text-muted-foreground mb-12">Easily copy-paste these code snippets into your projects.</p>

      <div className="grid grid-cols-1 gap-8">
        {/* Example Snippet 1: Basic Button Component */}
        <div className="bg-card p-6 rounded-lg border border-border shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Basic Button</h2>
          <p className="text-muted-foreground mb-4">A simple button component with primary styling.</p>
          <div className="bg-gray-900 rounded-md p-4 mb-4 overflow-x-auto">
            <pre>
              <code className="language-jsx text-white"
                dangerouslySetInnerHTML={{ __html: basicButtonCode }}>
              </code>
            </pre>
          </div>
          <button 
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => navigator.clipboard.writeText(basicButtonCode)}
          >
            Copy Code
          </button>
        </div>

        {/* Example Snippet 2: Dark Mode Toggle */}
        <div className="bg-card p-6 rounded-lg border border-border shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Dark Mode Toggle</h2>
          <p className="text-muted-foreground mb-4">A simple React hook and component to toggle dark mode.</p>
          <div className="bg-gray-900 rounded-md p-4 mb-4 overflow-x-auto">
            <pre>
              <code className="language-jsx text-white"
                dangerouslySetInnerHTML={{ __html: darkModeCode }}>
              </code>
            </pre>
          </div>
          <button 
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => navigator.clipboard.writeText(darkModeCode)}
          >
            Copy Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeSnippets; 