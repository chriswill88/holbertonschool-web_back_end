getPaymentTokenFromAPI = require('./6-payment_token');
const assert = require('chai').assert;
const expect = require('chai').expect;
const sinon = require('sinon');


describe('getPaymentTokenFromAPI', async function() {
  it('getPaymentTokenFromAPI', async function() {
    sinon.spy(console, 'log');
    const promise = getPaymentTokenFromAPI(true);
    const result = await promise;
    const obj = { data: 'Successful response from the API' };

    console.log(result);

    expect(console.log.calledWith(obj)).to.be.true;
  });
});