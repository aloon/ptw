#!/usr/bin/env node

var program = require('commander');
var utils = require('./utils.js');

console.log(utils.tags);

program
  .version('0.0.1')
  .option('-m, --message [value]', 'Text private message')
  .option('-t, --tags <tags>', 'List of tags', utils.tags)
  .parse(process.argv);

var anything=false;

if(program.message){
  anything=true;
  console.log(program.message);
}

if(program.tags){
  anything=true;
  console.log(program.tags);
}

if(!anything){
  console.log('¿?');
}