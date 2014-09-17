var utils = require('./utils.js');
var request = require('request');

module.exports = {
  getTokenByEmailPass: function (options, callback) {
    var url='http://localhost:3000/getToken';
    var data={ form: { email: options.email, pass: options.pass } };
    request.post(url, data, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        callback(body);
      }
      else{
        callback({'error':'error'})
      }
    });    
  },
  setMessage:function(data, callback){
    var url='http://localhost:3000/setMessage';
    var tosend={form:data};
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

