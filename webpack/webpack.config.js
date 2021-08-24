const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

// separate different environments, and use merge to merge common setting and the environment setting
module.exports = (envVars) => {
  const { env } = envVars
  const envConfig = require(`./webpack.${env}.js`)
  const config = merge(commonConfig, envConfig)
  return config
}
