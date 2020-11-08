// next.config.js
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const webpack = require('webpack')
const withOffline = require('next-offline')
const withSourceMaps = require('@zeit/next-source-maps')
const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')
const WebpackBar = require('webpackbar')

dotenvLoad()
const withNextEnv = nextEnv()

module.exports = withNextEnv(
  withSourceMaps(
    withOffline(
      withSass(
        withCSS({
          webpack: function(config) {
            // config url imports
            config.module.rules.push({
              test: /\.(eot|woff|woff2|ttf)$/,
              use: {
                loader: 'url-loader',
                options: {
                  limit: 100000,
                  name: '[name].[ext]'
                }
              }
            }),
              config.plugins.push(
                new WebpackBar({
                  fancy: true,
                  profile: true,
                  basic: false
                })
              )

            // return config
            return config
          }
        })
      )
    )
  )
)
