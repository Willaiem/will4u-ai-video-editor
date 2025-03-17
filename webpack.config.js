const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  devtool: "eval-cheap-source-map", // won't work on XD due to lack of eval
  externals: {
    uxp: "commonjs2 uxp",
    premierepro: "commonjs2 premierepro",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        // Match `.js`, `.jsx`, `.ts` or `.tsx` files
        test: /\.[jt]sx?$/,
        loader: "esbuild-loader",
        options: {
          // JavaScript version to compile to
          target: "es2015",
        },
      },
      //   {
      //     test: /\.jsx?$/,
      //     exclude: /node_modules/,
      //     loader: "babel-loader",
      //     options: {
      //       plugins: [
      //         "@babel/transform-react-jsx",
      //         "@babel/proposal-object-rest-spread",
      //         "@babel/plugin-syntax-class-properties",
      //       ],
      //     },
      //   },
      {
        test: /\.png$/,
        exclude: /node_modules/,
        loader: "file-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    //new CleanWebpackPlugin(),
    new CopyPlugin(["plugin"], {
      copyUnmodified: true,
    }),
  ],
};
