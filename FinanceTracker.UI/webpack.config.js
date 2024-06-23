const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle file name
    publicPath: '/', // Public path (used by dev server)
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpile JSX and ES6/ESNext
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Handle CSS files
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: {
          loader: 'file-loader', // Handle image files
          options: {
            name: '[name].[ext]',
            outputPath: 'images/',
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // File extensions to resolve
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML template file
      filename: 'index.html', // Output HTML file
    }),
  ],
  devServer: {
    historyApiFallback: true, // Enable navigation without page reload (for React Router)
    static: {            // Serve content from 'dist' directory
       directory: './dist',
    },
    port: 3000, // Port number
    open: true, // Open browser automatically
  },
};
