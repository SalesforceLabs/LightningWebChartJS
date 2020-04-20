const path = require('path');

const lwc = require('@lwc/rollup-plugin');
const replace = require('@rollup/plugin-replace');

module.exports = {
  input: path.resolve(__dirname, './src/index.js'),

  output: {
    file: path.resolve(__dirname, './dist/index.js')
  },

  plugins: [
    lwc({
      rootDir: path.resolve(__dirname, 'src/modules')
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      )
    })
  ]
};
