var assert = require("assert");
var br = require('../br');

describe('BussinesRules', function(){
  
  describe('generate token', function(){
    it('should return a valid token', function(){
      assert.equal(true, br.generateToken().length > 0);
    });
  });
  
  
  describe('Register', function(){
    it('should insert database, email not exists', function(done){
      var sinon = require("sinon");
      var user = require('../user');
      //var stub = sinon.stub(user, "count", function(){ return 0});
      br.register({email:'aloon@aloon.com', pass:'1234'}, function(data, error){
        assert.equal(true, error==null && data!=null);
        //stub.restore();
        done();
      });
    });
  });

});
