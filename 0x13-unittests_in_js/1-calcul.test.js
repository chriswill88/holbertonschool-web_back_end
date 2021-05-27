const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber sum', function() {
  it('...', function() {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
  });
  it('...', function() {
    assert.equal(calculateNumber('SUM', 1.2, 3), 4);
  });
  it('...', function() {
    assert.equal(calculateNumber('SUM', 1, 3.2), 4);
  });
  it('...', function() {
    assert.equal(calculateNumber('SUM', 1.5, 3), 5);
  });
  it('...', function() {
    assert.equal(calculateNumber('SUM', 1, 3.5), 5);
  });
  it('...', function() {
    assert.equal(calculateNumber('SUM', 1.2, 0), 1);
  });
  it('...', function() {
    assert.equal(calculateNumber('SUM', 0, 3.2), 3);
  });
  it('...', function() {
    assert.equal(calculateNumber('SUM', 1.5, 0), 2);
  });
  it('...', function() {
    assert.equal(calculateNumber('SUM', 0, 3.5), 4);
  });
  it('...', function() {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('...', function() {
    assert.equal(calculateNumber('SUM', -1.4, 4.5), 4);
  });
});

describe('calculateNumber div', function() {
  it('...', function() {
    assert.equal(calculateNumber('DIVIDE', 3, 1), 3);
  });
  it('...', function() {
    assert.equal(calculateNumber('DIVIDE', 0, 1), 0);
  });
  it('...', function() {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('...', function() {
    assert.equal(calculateNumber('DIVIDE', -1.4, -1), 1);
  });
});

describe('calculateNumber sub', function() {
  it('...', function() {
    assert.equal(calculateNumber('SUBTRACT', 1, 3), -2);
  });
  it('...', function() {
    assert.equal(calculateNumber('SUBTRACT', 3, 1), 2);
  });
  it('...', function() {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('...', function() {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 0), 1);
  });
  it('...', function() {
    assert.equal(calculateNumber('SUBTRACT', 0, 4.5), -5);
  });
});

describe('calculateNumber error', function() {
  it('...', function() {
    assert.equal(calculateNumber('DIVIDE', 1, 0), 'Error');
  });
  it('...', function() {
    assert.equal(calculateNumber('DIVIDE', 0, 0), 'Error');
  });
  it('...', function() {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
  it('...', function() {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0.2), 'Error');
  });
});