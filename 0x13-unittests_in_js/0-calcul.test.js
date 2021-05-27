const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber right', function() {
  it('...', function() {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('...', function() {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('...', function() {
    assert.equal(calculateNumber(1.2, 3), 4);
  });
  it('...', function() {
    assert.equal(calculateNumber(1.2, 0), 1);
  });
  it('...', function() {
    assert.equal(calculateNumber(0, 1.2), 1);
  });
  it('...', function() {
    assert.equal(calculateNumber(1.6, 0), 2);
  });
  it('...', function() {
    assert.equal(calculateNumber(0, 1.6), 2);
  });
});