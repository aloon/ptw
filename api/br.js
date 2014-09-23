'use strict'

module.exports = {
  
  getTokenByEmailPass: function (options, callback) {
    var user = require('./user');
    user.getUserByEmail(options.email,function(user){
      if(user==null){
        callback(null);
      } 
      else{
        var md5 = require('MD5');
        if(md5(options.pass+user.salt)==user.encryptPass){
          callback(user.token.token);
        } 
        else callback(null);
      }
    });
  },
  setMessage: function(data, callback){
    //data: {email:'', msg:'', tags:[], token:''}
    var user = require('./user');
    user.getUserByEmail(data.email, function(us){
      if(us==null){
        callback(null, {errorNum:2, errorTxt:"Invalid user"});
      }
      else{
        if(us.token.token==data.token){
          var db = require('db');
          db.connect('msg', function(msg){
            msg.insert({msg:data.msg, tags:data.tags, user:us._id}, function(err, docs){});
          });
        }
        else{
          callback(null, {errorNum:3, errorTxt:"Invalid token"});
        }
      }
    });
    
  },
  generateToken: function(a){
    return require('node-uuid').v4();    
  },
  register: function(data, callback){
    var thisbr = this;
    var user = require('./user');
    
    user.count(data.email, function(count){
      if(count==0){
        var salt = thisbr.generateToken(),
          token = thisbr.generateToken(),
          md5 = require('MD5'),
          datainsert = {
            email:data.email, 
            encryptPass:md5(data.pass+salt), 
            salt: salt, 
            token:{
              token:token
            }
          };

        user.insert(datainsert, function(err, docs) {
          callback(true, null);
        });
      }
      else{
        callback(null, {errorNum:1, errorTxt:"Email exists"});
      }
    });
  }
}