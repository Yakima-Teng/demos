// https://github.com/shelljs/shelljs
require('shelljs/global')
env.NODE_ENV = 'production'

var path = require('path')
var config = require('../config/index.js')
var ora = require('ora')
var webpack = require('webpack')
