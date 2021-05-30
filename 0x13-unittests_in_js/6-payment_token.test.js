getPaymentTokenFromAPI = require('./6-payment_token');
const assert = require('chai').assert;
const sinon = require('sinon');


describe('getPaymentTokenFromAPI', function() {
  it('getPaymentTokenFromAPI', function(done) {
    spy = sinon.spy(getPaymentTokenFromAPI);
    getPaymentTokenFromAPI(true);
    assert(spy.returned);
    done();
  });
});