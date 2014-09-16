#!/usr/bin/env node

var program = require('commander');
var utils = require('./utils.js');

program
  .version('0.0.1')
  .option('-m, --message [value]', 'Text private message')
  .option('-t, --tags <tags>', 'List of tags', utils.split)
  .parse(process.argv);

var withArgument=false;

if(program.message){
  withArgument=true;
  console.log(program.message);
}

if(program.tags){
  withArgument=true;
  console.log(program.tags);
}

if(withArgument){
  var fs = require('fs');
  fs.readFile(utils.getHomeDir()+'/.ptw', 'utf8', function (err,data) {
  if (err) {
    //var token = getToken();
    
  }
  
});
}
else{
  console.log('¿?');
}