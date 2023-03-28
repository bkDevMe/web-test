const baseDevConfig = require('bk-builder/lib/webpack.dev.js');
const { merge } = require('webpack-merge');

console.log('dev', merge({}, baseDevConfig));

module.export = merge({}, baseDevConfig);
