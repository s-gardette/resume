// prettier.config.js
module.exports = {
  plugins: ["prettier-plugin-tailwindcss"], // Keep the Tailwind plugin
  // Common Prettier Options:
  semi: true,                     // Add semicolons at the end of statements
  singleQuote: false,             // Use double quotes instead of single quotes
  tabWidth: 2,                    // Use 2 spaces for indentation
  trailingComma: "es5",           // Add trailing commas where valid in ES5 (objects, arrays, etc.)
  printWidth: 80,                 // Wrap lines that exceed 80 characters
  bracketSpacing: true,           // Print spaces between brackets in object literals { foo: bar }
  arrowParens: "always",          // Always include parentheses around arrow function parameters (e.g., (x) => x)
};
