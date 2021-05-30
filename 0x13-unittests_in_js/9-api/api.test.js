const { expect } = require('chai');
const request = require('request');
const { spy } = require('sinon');


const options = {
  hostname: '127.0.0.0',
  port: 7865,
  method: 'GET'
}

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
});