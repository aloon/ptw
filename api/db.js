module.exports = {
  userCount: function(email, callback){
    var thisdb=this;
    this._connect('user', function(user){
      user.find({email:email}).limit(1).toArray(function(err, docs) {
        thisdb._close();
        callback(docs.length);
      });
    });
  },
  userInsert: function(datainsert, callback){
    var thisdb=this;
    this._connect('user', function(user){
      user.insert(datainsert, function(err, docs) {
        thisdb._db.close();
        if(err) callback(false);
        else callback(true);
      });
    });
  },
  _db: null,
  _connect: function(collectionName, callback){
    var mongo = require('mongoskin');

    var host = process.env['MONGO_HOST'] != null ? process.env['MONGO_HOST'] : 'localhost';
    var port = process.env['MONGO_PORT'] != null ? process.env['MONGO_PORT'] : 27017;
    
    this._db = mongo.db("mongodb://"+host+":"+port+"/ptw", {native_parser:true});
    
    this._db.createCollection(collectionName, function(err, collection) {
      callback(collection);
    });
  },
  _close: function(){
    if(this._db!=null){
      this._db.close();
      this._db=null;
    }
  }
}