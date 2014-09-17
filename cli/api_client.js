var utils = require('./utils.js');

module.exports = {
  getToken: function (callback) {
    var fs = require('fs');
    var path = utils.getHomeDir() + '/.ptw';
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

