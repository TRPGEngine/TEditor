const path = require('path');
const version = process.env.VERSION || require('../package.json').version;
const buble = require('rollup-plugin-buble');
const scss = require('rollup-plugin-scss');

const banner =
  '/*!\n' +
  ' * teditor.js for trpg, v' + version + '\n' +
  ' * (c) 2018-' + new Date().getFullYear() + ' by moonrailgun\n' +
  ' * Released under the MIT License.\n' +
  ' */'

module.exports = {
  input: path.resolve(__dirname, '../src/index.js'),
  plugins: [
    buble(),
    scss(),
  ],
  output: {
    file: path.resolve(__dirname, '../dist/teditor.js'),
    format: 'umd',
    banner,
    name: 'TEditor'
  }
}
