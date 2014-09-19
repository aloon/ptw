module.exports = {
  db: null,
  connect: function(collectionName, callback){
    var mongo = require('mongoskin');

    var host = process.env['MONGO_HOST'] != null ? process.env['MONGO_HOST'] : 'localhost';
    var port = process.env['MONGO_PORT'] != null ? process.env['MONGO_PORT'] : 27017;
    
    this._db = mongo.db("mongodb://"+host+":"+port+"/ptw", {native_parser:true});
    
    this._db.createCollection(collectionName, function(err, collection) {
      callback(collection);
    });
  },
  close: function(){
    if(this._db!=null){
      this._db.close();
      this._db=null;
    }
  }
}