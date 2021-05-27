const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber right', function() {
  it('...', function() {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('...', function() {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
});

describe('calculateNumber left', function() {
  it('...', function() {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('...', function() {
    assert.equal(calculateNumber(1.2, 3), 4);
  });
});