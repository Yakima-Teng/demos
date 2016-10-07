var merge = require('webpack-merge')
var prodEnv = require('./prod.env.js')

/**
 * *********************************************************************************
 *                                                                                  *
 * 覆盖掉prod.env.js中的NODE_ENV配置
 *                                                                                  *
 ***********************************************************************************/
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
