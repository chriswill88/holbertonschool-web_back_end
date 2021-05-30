const { expect } = require('chai');
const request = require('request');
const { spy } = require('sinon');


describe('index page', () => {
  spy(console, 'log');

  it('status code', () => {
    request('http://localhost:7865/cart/12', function(err, res, body) {
      // console.log(res.toJSON().request.uri.path.split('/')[2]);
      console.log(res.statusCode)
      expect(console.log.calledWith(200)).to.be.true;
    });
  });
  it('status code', () => {
    request('http://localhost:7865/cart/hello', function(err, res, body) {
      // console.log(res.toJSON().request.uri.path.split('/')[2]);
      console.log(res.statusCode)
      expect(console.log.calledWith(404)).to.be.true;
    });
  });
  it('body returns', () => {
    request('http://localhost:7865/', function(err, res, body) {
      console.log(body);
      expect(console.log.calledWith('Welcome to the payment system')).to.be.true;
    });
  });
  it('body returns', () => {
    request('http://localhost:7865/cart/12', function(err, res, body) {
      console.log(body);
      expect(console.log.calledWith('Payment methods for cart 12')).to.be.true;
    });
  });
  it('get', () => {
    request('http://localhost:7865/', function(err, res, body) {
      console.log(res.request.method);
      expect(console.log.calledWith('GET')).to.be.true;
    });
  });


  it('get', () => {
    request({
      url: 'http://localhost:7865/login',
      method: 'POST',
      body: '{ "userName": "Betty" }'
    }, function(err, res, body) {
      console.log(res.request.method);
      expect(console.log.calledWith('POST')).to.be.true;
    });
  });
  it('get', () => {
    request('http://localhost:7865/available_payments', function(err, res, body) {
      console.log(res.request.method);
      expect(console.log.calledWith('GET')).to.be.true;
    });
  });

  it('get', () => {
    request({
      headers: { 'content-type': 'application/json' },
      method: 'POST',
      url: 'http://localhost:7865/login',
      body: '{ "userName": "Betty" }'
    }, function(err, res, body) {
      console.log(body);
      expect(console.log.calledWith('Welcome Betty')).to.be.true;
    });
  });
  it('get', () => {
    request('http://localhost:7865/available_payments', function(err, res, body) {
      console.log(body);
      expect(console.log.calledWith('{"payment_methods":{"credit_cards":true,"paypal":false}}')).to.be.true;
    });
  });

});