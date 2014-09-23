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
  
  
  describe('User & message', function(){
    
    before(function(done){
      var db = require('../db');
      db.connect('user',function(col_user){
        col_user.remove({}, function(err, docs){
          db.connect('msg', function(col_msg){
            col_msg.remove({}, function(err, result){
              done();
            });
          });
        });
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
    
    var correct_token;
    it('get valid token', function(done){
      br.getTokenByEmailPass({email:'test@test.com',pass:'1234'}, function(token){
        token.length.should.be.above(5);
        correct_token = token;
        done();
      });
    });
    
    it('set message', function(done){
      br.setMessage({email:'test@test.com', msg:'test message', tags:['test','alex'], token:correct_token},function(data, error){
        expect(error).to.be.null;
        expect(data).not.to.be.null;
        data.msg.should.be.equals('test message');
        done();
      });
    });

    after(function(done){
      var db = require('../db');
      db.connect('user',function(col_user){
        col_user.remove({}, function(err, docs){
          db.connect('msg', function(col_msg){
            col_msg.remove({}, function(err, result){
              done();
            });
          });
        });
      });
    });
  
    
  });

  
});
