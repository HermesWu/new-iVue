'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ENV_CONFIG: '"dev"',
  baseUrl: '"/api"',
  testUrl: '"/test"',
  preUrl: '"/pre"',
  proUrl: '"/pro"'
})
