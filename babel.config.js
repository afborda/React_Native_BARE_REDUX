module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ts", ".tsx", ".js", ".json"],
          alias: {
            "@components": "./src/components",
            "@img": "./src/assets/img",
            "@json": "./src/assets/json",
            "@assets": "./src/assets",
            "@global": "./src/global",
            "@router": "./src/router",
            "@screens": "./src/screens",
            "@theme": "./src/theme"
          }
        }
      ]
    ]
  };
};
