module.exports = {
  
  getTokenByEmailPass: function (options, callback) {
  
  },
  setMessage: function(data, callback){

  },
  register: function(data, callback){
    var MongoClient = require('mongodb').MongoClient,
        format = require('util').format;
    MongoClient.connect('mongodb://127.0.0.1:27017/ptw', function(err, db) {
      var user = db.collection('user');
      //https://github.com/mongodb/node-mongodb-native
    });
    
  }
};

