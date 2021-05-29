const assert = require('chai').assert;
const sendPaymentRequestToApi = require('./4-payment');
const sinon = require('sinon');



describe('test', function() {
  const sandbox = sinon.createSandbox();

  this.beforeEach(function() {
    sandbox.spy(console, 'log');
  });

  this.afterEach(function() {
    sandbox.restore();
  });

  it('...', function() {
    sendPaymentRequestToApi(100, 20);

    assert(console.log.calledOnce);
    assert(console.log.calledWith('The total is: 120'));
  });

  it('...', function() {
    sendPaymentRequestToApi(10, 10);

    assert(console.log.calledWith('The total is: 20'));
    assert(console.log.calledOnce);
  });
});