process.env.NODE_ENV = process.env.NODE_ENV || 'production'

const { environment } = require('@rails/webpacker');
const path = require('path');

environment.config.merge({
  mode: 'production', // Ensure the mode is set to production
  output: {
    filename: '[name]-[contenthash].js', // Output with content hash for cache busting
    path: path.resolve(__dirname, '..', 'public', 'packs') // Correct path for output
  },
  optimization: {
    splitChunks: {
      chunks: 'all' // Split chunks for optimization
    }
  },
  resolve: {
    alias: {
      // Define any necessary aliases here
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx'], // Ensure TypeScript files are resolved correctly
  }
});

module.exports = environment;
