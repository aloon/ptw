module.exports = {
  split: function (val) {
    return val.split(',').map(function(tag){
      return tag.trim();  
    }).filter(function(tag){
      return tag!='';
    });
  },
  getHomeDir:function(){
    return process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
  },
  getDotFile:function(){
    return this.getHomeDir()+'/.ptw';
  },
  readDotFile: function (callback) {
    var fs = require('fs');
    var path = this.getDotFile();
    fs.readFile(path, 'utf8', function (error, data) {
      if (error) {
        callback(null);
      }
      else{
        callback(JSON.parse(data));
      }      
    });
  }
};

