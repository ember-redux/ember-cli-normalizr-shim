import { test, module } from 'qunit';
import { normalize, schema } from 'normalizr';

module('normalizr export tests');

test('exports normalize function', function(assert) {
  assert.equal(typeof normalize, 'function');
});

test('exports schema function', function(assert) {
  assert.equal(typeof schema, 'object');
});
