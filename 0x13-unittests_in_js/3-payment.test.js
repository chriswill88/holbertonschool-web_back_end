const sinon = require('sinon')
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const expect = require('chai').expect;


describe('test', function() {
  it('...', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);

    expect(spy.calledWith('SUM', 100, 20)).to.be.true;
  });
});