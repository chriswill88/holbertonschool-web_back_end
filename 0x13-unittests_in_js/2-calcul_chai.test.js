const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai'); // **CHECK!!!!!**

describe('type=SUM', function() {
  it('type=SUM', function() {
    expect(calculateNumber('SUM', 1, 3)).to.be.equal(4);
  });
  it('type=SUM', function() {
    expect(calculateNumber('SUM', 1.2, 3)).to.be.equal(4);
  });
  it('type=SUM', function() {
    expect(calculateNumber('SUM', 1, 3.2)).to.be.equal(4);
  });
  it('type=SUM', function() {
    expect(calculateNumber('SUM', 1.5, 3)).to.be.equal(5);
  });
  it('type=SUM', function() {
    expect(calculateNumber('SUM', 1, 3.5)).to.be.equal(5);
  });
  it('type=SUM', function() {
    expect(calculateNumber('SUM', 1.2, 0)).to.be.equal(1);
  });
  it('type=SUM', function() {
    expect(calculateNumber('SUM', 0, 3.2)).to.be.equal(3);
  });
  it('type=SUM', function() {
    expect(calculateNumber('SUM', 1.5, 0)).to.be.equal(2);
  });
  it('type=SUM', function() {
    expect(calculateNumber('SUM', 0, 3.5)).to.be.equal(4);
  });
  it('type=SUM', function() {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.be.equal(6);
  });
  it('type=SUM', function() {
    expect(calculateNumber('SUM', -1.4, 4.5)).to.be.equal(4);
  });
});

describe('calculateNumber div', function() {
  it('...', function() {
    expect(calculateNumber('DIVIDE', 3, 1)).to.be.equal(3);
  });
  it('...', function() {
    expect(calculateNumber('DIVIDE', 0, 1)).to.be.equal(0);
  });
  it('...', function() {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.equal(0.2);
  });
  it('...', function() {
    expect(calculateNumber('DIVIDE', -1.4, -1)).to.be.equal(1);
  });
});

describe('calculateNumber sub', function() {
  it('...', function() {
    expect(calculateNumber('SUBTRACT', 1, 3)).to.be.equal(-2);
  });
  it('...', function() {
    expect(calculateNumber('SUBTRACT', 3, 1)).to.be.equal(2);
  });
  it('...', function() {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.be.equal(-4);
  });
  it('...', function() {
    expect(calculateNumber('SUBTRACT', 1.4, 0)).to.be.equal(1);
  });
  it('...', function() {
    expect(calculateNumber('SUBTRACT', 0, 4.5)).to.be.equal(-5);
  });
});

describe('calculateNumber error', function() {
  it('...', function() {
    expect(calculateNumber('DIVIDE', 1, 0)).to.be.equal('Error');
  });
  it('...', function() {
    expect(calculateNumber('DIVIDE', 0, 0)).to.be.equal('Error');
  });
  it('...', function() {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.be.equal('Error');
  });
  it('...', function() {
    expect(calculateNumber('DIVIDE', 1.4, 0.2)).to.be.equal('Error');
  });
});