const path = require("path");

const MODE = "development";
const enabledSourceMap = MODE === "development";

module.exports = {
  mode: MODE,

  entry: "./src/main.tsx",
  output: {
    path: `${__dirname}/dist`,
    filename: 'form1.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      },

      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: enabledSourceMap
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  target: ["web", "es5"],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    }
  },
};



