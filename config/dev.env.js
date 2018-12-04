'use strict'
const merge = require('webpack-merge')
const stgEnv = require('./stg.env')

module.exports = merge(stgEnv, {
    NODE_ENV: '"development"'
})
