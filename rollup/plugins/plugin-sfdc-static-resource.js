'use strict';

const STATIC_RESOURCE_ORIGIN = '@salesforce/resourceUrl';

module.exports = (targetDir) => ({
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
        targetDir
      )}'`;
    }
  }
});
