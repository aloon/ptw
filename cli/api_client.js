var utils = require('./utils.js');
var request = require('request');

module.exports = {
  urlAPI: function(){
    return 'http://localhost:3000';
  },
  getTokenByEmailPass: function (options, callback) {
    var url = this.urlAPI + '/getToken';
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
    var url = this.urlAPI + '/setMessage';
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

