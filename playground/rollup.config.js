const path = require('path');

const lwc = require('@lwc/rollup-plugin');
const replace = require('@rollup/plugin-replace');
const html = require('@rollup/plugin-html');
const cleanup = require('rollup-plugin-cleanup');
const copy = require('rollup-plugin-copy');
const cleaner = require('rollup-plugin-cleaner');
const multi = require('@rollup/plugin-multi-entry');

const STATIC_RESOURCE_ORIGIN = '@salesforce/resourceUrl';
const STATIC_RESOURCE_TARGET = 'staticresources';

function staticResource() {
  return {
    name: 'static-resource',

    // https://rollupjs.org/guide/en/#resolveid
    resolveId(source) {
      if (source.startsWith(STATIC_RESOURCE_ORIGIN)) {
        return `${source}.js`;
      }
    },

    // https://rollupjs.org/guide/en/#load
    load(id) {
      if (id.startsWith(STATIC_RESOURCE_ORIGIN)) {
        return `export default '${id.replace(
          STATIC_RESOURCE_ORIGIN,
          STATIC_RESOURCE_TARGET
        )}'`;
      }
    }
  };
}

module.exports = {
  input: path.resolve(__dirname, './src/rollup-playground/index.js'),

  output: {
    file: path.resolve(__dirname, './dist/index.js')
  },

  plugins: [
    cleaner({ targets: [path.resolve(__dirname, './dist/')] }),
    cleanup(),
    html(),
    copy({
      targets: [
        {
          src: path.resolve(__dirname, './src/staticresources'),
          dest: path.resolve(__dirname, './dist/')
        }
      ]
    }),
    lwc({
      rootDir: path.resolve(__dirname, 'src/modules')
    }),
    staticResource(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      )
    })
  ]
};
