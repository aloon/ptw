module.exports = {
  
  getTokenByEmailPass: function (options, callback) {
  
  },
  setMessage: function(data, callback){

  },
  generateToken: function(a){
    return require('node-uuid').v4();    
  },
  register: function(data, callback){
    var br = this;
    var mongo = require('mongoskin');

    var host = process.env['MONGO_HOST'] != null ? process.env['MONGO_HOST'] : 'localhost';
    var port = process.env['MONGO_PORT'] != null ? process.env['MONGO_PORT'] : 27017;
    
    // mirar https://github.com/kissjs/node-mongoskin
    var db = mongo.db("mongodb://"+host+":"+port+"/ptw", {native_parser:true});

      //console.log(db);
      db.createCollection('user', function(err, user) {

        //TODO: create indexes
        console.log(err);
        user.find({email:data.email}).limit(1).toArray(function(err, docs ) {

          if(docs.length==0){
            var salt = br.generateToken(),
              token = br.generateToken(),
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
              db.close();
              callback(true, null);
            });
          }
          else{
            db.close();
            callback(null, {errorNum:1, errorTxt:"Email exists"});
          }
        });      
      });

      //console.log('mm');

  }
};

