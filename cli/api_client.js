var utils = require('./utils.js');
var request = require('request');

module.exports = {
  getTokenByEmailPass: function (email, pass, callback) {

    var url='http://localhost:3000/getToken';
    var data={ form: { email: email, pass: pass } };
    request.post(url, data, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        callback(body);
      }
      else{
        callback({'error':'error'})
      }
    });
    
  }
};

