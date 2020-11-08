const path = require('path')

// Export a function. Accept the base config as the only param.
module.exports = ({ config, mode }) => {
  config.optimization.splitChunks = {
    chunks: 'async',
    minSize: 3000000, //3MB
    maxSize: 5000000, //5MB
    minChunks: 1,
    maxAsyncRequests: 6,
    maxInitialRequests: 4,
    automaticNameDelimiter: '~',
    cacheGroups: {
      defaultVendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10
      },
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true
      }
    }
  }

  /* Support for React Native Web */
  config.resolve = {
    modules: ['node_modules'],
    extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx', 'ts', 'tsx'],
    alias: {
      'react-native': 'react-native-web'
    }
  }

  /* PostCSS Support */
  config.module.rules.push({
    test: /\.css$/,
    exclude: path.resolve(__dirname, '../node_modules'),
    loaders: [
      // Loader for webpack to process CSS with PostCSS
      {
        loader: 'postcss-loader',
        options: {
          /*
            Enable Source Maps
           */
          sourceMap: false,
          /*
            Set postcss.config.js config path && ctx
           */
          config: {
            path: './.storybook/'
          }
        }
      }
    ],

    include: path.resolve(__dirname, '../')
  })

  /* TypeScript Support */
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    exclude: path.resolve(__dirname, '../node_modules'),
    use: [
      {
        // Typescript compiler
        loader: require.resolve('awesome-typescript-loader')
      },
      {
        // Webpack loader to generate docgen information from Typescript React components.
        loader: require.resolve('react-docgen-typescript-loader')
      }
    ]
  })

  // fonts
  config.module.rules.push({
    test: /\.(woff|woff2|eot|ttf)$/,
    exclude: path.resolve(__dirname, '../node_modules'),
    use: [
      {
        loader: 'file-loader',
        query: {
          name: '[name].[ext]'
        }
      }
    ],
    include: path.resolve(__dirname, '../')
  })

  config.resolve.extensions.push('.ts', '.tsx')

  // Return the altered config
  return config
}
