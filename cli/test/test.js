var assert = require("assert");
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

var utils = require('../utils');

describe('API Client', function(){
  describe('GetToken', function(){
    it('getTokenByDotFile, exist .ptw', function(){
      var sinon = require("sinon");
      var stub = sinon.stub(utils, "getHomeDir", function(){ return './test'});
      utils.getTokenByDotFile(function(token){
        assert.equal('QWERTY', token); 
        stub.restore();
      });      
    });
  });
});