const path = require('path')

module.exports = {
  stories: [
    '../stories/**/*.stories.tsx',
    '../stories/**/*.stories.ts',
    '../stories/**/*.stories.js',
    '../stories/**/*.stories.jsx'
  ],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-notes/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-storysource'
  ],
  webpackFinal: async config => {
    ;(config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(ts|tsx)$/,
        exclude: path.resolve(__dirname, "../node_modules"),
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [require.resolve('babel-preset-react-app')],
              compact: false
            }
          }
        ]
      }
    ]),
      config.resolve.extensions.push('.ts', '.tsx')
    return config
  }
}
