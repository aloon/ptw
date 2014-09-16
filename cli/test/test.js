var utils = require('../utils');
var assert = require("assert")

describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
});

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