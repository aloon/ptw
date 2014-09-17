#!/usr/bin/env node

var program = require('commander');
var utils = require('./utils.js');
var api_client = require('./api_client.js');

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
  api_client.getTokenByEmailPass('','',function(result){
    console.log(result);
  });
}
else{
  console.log('¿?');
}