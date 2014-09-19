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
  getTokenByDotFile: function (callback) {
    var fs = require('fs');
    var path = this.getDotFile();
    fs.readFile(path, 'utf8', function (error, data) {
      var res;
      if (!error) {
        res = data;
      }
      callback(res);
    });
  }
};

