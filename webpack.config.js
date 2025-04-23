const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",

  devtool: "source-map",

  entry: {
    application: "./app/javascript/packs/application.tsx",
  },

  output: {
    filename: "[name].js",
    sourceMapFilename: "[file].map",
    chunkFormat: "module",
    path: path.resolve(__dirname, "app/assets/builds"),
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
    },
  },

  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      // Handle regular .scss files (non-modules)
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                loadPaths: [
                  path.resolve(__dirname, "app/assets/stylesheets/globals"),
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
