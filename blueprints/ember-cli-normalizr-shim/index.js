module.exports = {
  afterInstall: function () {
    return this.addPackagesToProject([
      {name: 'normalizr', target: '3.2.2'}
    ])
  },

  normalizeEntityName: function () {
    // this prevents an error when the entityName is not specified
  }
}
