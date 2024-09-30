/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  semi: true,
  trailingComma: "all",
  printWidth: 80,
  overrides: [
    {
      files: ["*.js"],
      options: {
        singleQuote: true,
        jsxSingleQuote: false,
      },
    },
  ],
};

export default config;
