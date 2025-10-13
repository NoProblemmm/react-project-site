module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: "> 0.25%, not dead",
      },
    ],
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    [
      "@babel/plugin-proposal-class-properties",
      { loose: false, privateFields: true },
    ],
    ["@lingui/babel-plugin-lingui-macro"],
  ],
};
