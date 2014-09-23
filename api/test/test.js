var assert = require("assert");
var should = require('chai').should();
var br = require('../br');

describe('BussinesRules', function(){
  
  describe('generate token', function(){
    it('should return a valid token', function(){
      br.generateToken().length.should.be.greaterThan(0, "length token  error");         
    });
  });
  
  
  describe('Register', function(){
    
    before(function(done){
      var db = require('../db');
      db.connect('user',function(col){
        col.remove({email:'test@test.com'}, function(err, result){});
        done();
      });
    });
    
    it('no existe usuario con este email', function (done) {    
      br.register({email:'test@test.com', pass:'1234'}, function(data, error){
        (true, error==null && data!=null).should.be.ok;
        done();
      });
    });
    
    it('existe usuario', function (done) {    
      br.register({email:'test@test.com', pass:'1234'}, function(data, error){
        console.log((1 == error.errorNum));
        error.errorNum.should.be.equals(1);
        done();
      });
    });   
 
    after(function(done){
      var db = require('../db');
      db.connect('user',function(col){
        col.remove({email:'test@test.com'}, function(err, result){});
        done();
      });
    });

    
  });

  
});
