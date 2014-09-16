var assert = require("assert");

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
});

var utils = require('../utils');

describe('Tags', function(){
  describe('Separar tags',function(){
    it('should return trimed separated tag', function(){
      assert.equal('hola',utils.split('hola')[0]);
      assert.equal('hola',utils.split('hola, caracola')[0]);
      assert.equal('hola',utils.split(' hola , caracola')[0]);
      assert.equal('caracola',utils.split(' hola , caracola')[1]);
      assert.equal(2, utils.split(' hola , caracola').length);
      assert.equal(2, utils.split(' hola , caracola,').length);
    });
  });
});

var api_client = require('../api_client');
var utils = require('../utils');


describe('API Client', function(){
  describe('GetToken', function(){
    it('getToken, exist .ptw', function(){
      //var sinon = require("sinon");
      //var utils={};
      //utils.getHomeDir = sinon.stub();
      //utils.getHomeDir.returns('./');
      api_client.getToken('./test', function(token){
        assert.equal('QWERTY', token);
      });
    })
  });
});