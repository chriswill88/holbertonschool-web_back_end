const sinon = require('sinon')
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const expect = require('chai').expect;


describe('test', function() {
  it('...', function() {
    const stub = sinon.stub(Utils, 'calculateNumber');
    stub.returns(10);

    const spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);

    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(spy.called).to.be.true;
  });
});