const path = require('path');

const lwc = require('@lwc/rollup-plugin');
const replace = require('@rollup/plugin-replace');

const STATIC_RESOURCE_PREFIX = '@salesforce/resourceUrl/';

function staticResource() {
  return {
    name: 'static-resource',

    // https://rollupjs.org/guide/en/#resolveid
    resolveId(id) {
      if (id.startsWith(STATIC_RESOURCE_PREFIX)) {
        return `${id}.js`;
      }
    },

    // https://rollupjs.org/guide/en/#load
    load(id) {
      if (!id.startsWith(STATIC_RESOURCE_PREFIX)) {
        return;
      }

      const resource = id.replace(STATIC_RESOURCE_PREFIX, '');
      return `
        export default '/src/staticresources/${resource}';
      `;
    }
  };
}

module.exports = {
  input: path.resolve(__dirname, './src/index.js'),

  output: {
    file: path.resolve(__dirname, './dist/index.js')
  },

  plugins: [
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
