module.exports = {
  getToken: function (home_dir, callback) {
    var fs = require('fs');
    var path = home_dir + '/.ptw';
    console.log(path);
    fs.readFile(path, 'utf8', function (error, data) {
      var res='';
      if (error) {
        //TODO: do request to API
      }
      else{
        res = data;
      }
      callback(res);
    });
  }
};

