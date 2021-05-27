const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber sum', function() {
  it('...', function() {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
  });
});

describe('calculateNumber div', function() {
  it('...', function() {
    assert.equal(calculateNumber('DIVIDE', 3, 1), 3);
  });
});

describe('calculateNumber sub', function() {
  it('...', function() {
    assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
  });
});

describe('calculateNumber error', function() {
  it('...', function() {
    assert.equal(calculateNumber('DIVIDE', 1, 0), 'Error');
  });
});