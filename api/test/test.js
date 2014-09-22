var assert = require("assert");
var should = require('should');
var sinon = require("sinon");
var rewire = require('rewire');
var br = rewire('../br');
//var PubSub = global.PubSub || require("pubsub-js")

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
        col.remove({email:'aloon@aloon.com'}, function(err, result){});
        done();
      });
    });
    
    it('no existe usuario con esas caracteristicas', function (done) {
    
      br.register({email:'aloon@aloon.com', pass:'1234'}, function(data, error){
        (true, error==null && data!=null).should.be.true;
        done();
      });

    });
    

    
  });

  
});
