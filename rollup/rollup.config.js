const cleaner = require('rollup-plugin-cleaner');
const cleanup = require('rollup-plugin-cleanup');
const copy = require('rollup-plugin-copy');
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
    cleaner({
      targets: [
        path.resolve(__dirname, './dist/'),
        path.resolve(__dirname, './src/modules/c/**')
      ]
    }),
    cleanup(),
    copy({
      targets: [
        {
          src: 'lwcc-app/library/chartjs/staticresources/',
          dest: path.resolve(__dirname, './dist/')
        },
        {
          src: 'lwcc-app/library/chartjs/lwc/*',
          dest: path.resolve(__dirname, './src/modules/c')
        },
        {
          src: 'lwcc-app/library/external/lwc/*',
          dest: path.resolve(__dirname, './src/modules/c')
        },
        {
          src: 'lwcc-app/library/internal/lwc/*',
          dest: path.resolve(__dirname, './src/modules/c')
        },
        {
          src: 'lwcc-app/samples/common/lwc/*',
          dest: path.resolve(__dirname, './src/modules/c')
        },
        {
          src: 'lwcc-app/samples/library/lwc/*',
          dest: path.resolve(__dirname, './src/modules/c')
        }
      ]
    }),
    lwc({
      rootDir: path.resolve(__dirname, './src/modules/')
    }),
    staticResource(STATIC_RESOURCE_TARGET),
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      )
    })
  ]
};
