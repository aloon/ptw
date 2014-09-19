module.exports = {
  
  getTokenByEmailPass: function (options, callback) {
  
  },
  setMessage: function(data, callback){

  },
  generateToken: function(a){
    return require('node-uuid').v4();    
  },
  register: function(data, callback){
    var thisbr = this;
    var db = require('./db');
    
    db.userCount(data.email, function(count){
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

        db.userInsert(datainsert, function(err, docs) {
          callback(true, null);
        });
      }
      else{
        callback(null, {errorNum:1, errorTxt:"Email exists"});
      }
    });
  }
}