var assert = require("assert");
var should = require('chai').should();
var expect = require('chai').expect;
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
        error.errorNum.should.be.equals(1);
        done();
      });
    });
    
    it('get valid token', function(done){
      br.getTokenByEmailPass({email:'test@test.com',pass:'1234'}, function(token){
        token.length.should.be.above(5);
        done();
      });
    });
    
    it('get invalid token, pass fails', function(done){
      br.getTokenByEmailPass({email:'test@test.com',pass:'123'}, function(token){
        expect(token).to.be.null;
        done();
      });
    });
    
    it('get invalid token, email fails', function(done){
      br.getTokenByEmailPass({email:'test@tesdst.com',pass:'1234'}, function(token){
        expect(token).to.be.null;
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
