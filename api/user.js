module.exports = {
  count: function(email, callback){
    var db = require('./db');
    db.connect('user', function(user){
      user.find({email:email}).limit(1).toArray(function(err, docs) {
        db.close();
        callback(docs.length);
      });
    });
  },
  getUserByEmail: function(email, callback){
    var db = require('./db');
    db.connect('user', function(user){
      user.find({email:email}).toArray(function(err, docs) {
        db.close();
        if(docs.length==1) callback(docs[0]);
        else callback(null);
      });
    });
  },
  insert: function(datainsert, callback){
    var db = require('./db');
    db.connect('user', function(user){
      user.insert(datainsert, function(err, docs) {
        db.close();
        if(err) callback(false);
        else callback(true);
      });
    });
  }
}