var assert = require("assert");
var br = require('../br');

describe('BussinesRules', function(){
  
  describe('generate token', function(){
    it('should return a valid token', function(){
      console.log(br.generateToken())
      assert.equal(true, br.generateToken().length > 0);
    });
  });
  
  
  describe('Register', function(){
    it('should insert database', function(done){
      br.register({email:'aloon@aloon.com', pass:'1234'}, function(data, error){
        assert.equal(true, error==null && data!=null);
        done();
      });
    });
  });

});
