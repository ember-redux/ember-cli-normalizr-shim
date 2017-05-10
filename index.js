/* eslint-env node */
'use strict';

const mergeTrees = require('broccoli-merge-trees');
const path = require('path');

module.exports = {
  name: 'normalizr',
  treeForAddon (tree) {
    const normalizrPath = path.dirname(require.resolve('normalizr/dist/src/index.js'));
    const normalizrTree = this.treeGenerator(normalizrPath);

    if (!tree) {
      return this._super.treeForAddon.call(this, normalizrTree);
    }

    const trees = mergeTrees([normalizrTree, tree], {
      overwrite: true
    });

    return this._super.treeForAddon.call(this, trees);
  }
}
