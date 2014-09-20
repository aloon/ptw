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
    it('should log that a request was made', function (done) {

      
      //var stub = sinon.stub(br, "register");
      //stub.withArgs({email:'aloon@aloon.com', pass:'1234'});
      
      var userMock = {
        count: function (email, callback) {
          console.log('llega')
          expect(email).to.equal("...");
          callback(0);
        }/*,
        insert: function (data, callback){
          callback(true);
        }*/
        
      };
      //br.__set__("user", userMock);
      
      var brMock = {
        register: function(data, callback){
          console.log('loggin')
          callback(true,null);
        }
      }
      br.__set__("register", brMock);
      
      br.register({email:'aloon@aloon.com', pass:'1234'}, function(data, error){
        
        
        //stub.restore();
        (true, error==null && data!=null).should.be.true;
        done();
      });
      
      
  });
    
    
    
//    it('should insert database, email not exists', function(done){
//      var sinon = require("sinon");
//      var user = require('../user');
//      //var stub = sinon.stub(user, "count", function(){ return 0});
//      br.register({email:'aloon@aloon.com', pass:'1234'}, function(data, error){
//        assert.equal(true, error==null && data!=null);
//        //stub.restore();
//        done();
//      });
//    });
    
  });

  
});
