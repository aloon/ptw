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