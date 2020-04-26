const cleaner = require('rollup-plugin-cleaner');
const cleanup = require('rollup-plugin-cleanup');
const copy = require('rollup-plugin-copy');
const html = require('@rollup/plugin-html');
const lwc = require('@lwc/rollup-plugin');
const path = require('path');
const replace = require('@rollup/plugin-replace');
const staticResource = require('./plugins/plugin-sfdc-static-resource');

const STATIC_RESOURCE_TARGET = './staticresources';

module.exports = {
  input: path.resolve(__dirname, './src/apps/samples.js'),

  output: {
    file: path.resolve(__dirname, './dist/samples.js')
  },

  plugins: [
    cleaner({ targets: [path.resolve(__dirname, './dist/')] }),
    cleanup(),
    html(),
    copy({
      targets: [
        {
          src: 'force-app/main/default/staticresources/',
          dest: path.resolve(__dirname, './dist/')
        }
      ]
    }),
    lwc({
      rootDir: path.resolve(__dirname, 'src/modules')
    }),
    staticResource(STATIC_RESOURCE_TARGET),
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      )
    })
  ]
};
