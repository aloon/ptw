module.exports = {
  split: function (val) {
    return val.split(',').map(function(tag){
      return tag.trim();
    });
  },
  getHomeDir:function(){
    return process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
  }
};

