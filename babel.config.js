module.exports = {
  presets: [],
  plugins: [
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: false }],
    ["@lingui/babel-plugin-lingui-macro"],
  ],
};
